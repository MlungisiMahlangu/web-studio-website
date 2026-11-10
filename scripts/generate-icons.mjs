import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const brand = [0x00, 0x61, 0xfd]
const white = [0xff, 0xff, 0xff]

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  return table
})()

function crc32(buffer) {
  let c = 0xffffffff
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type, 'ascii')
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])))
  return Buffer.concat([length, typeBuffer, data, crc])
}

function encodePng(width, height, rgba) {
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8
  header[9] = 6
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

// ICO entries may contain a PNG payload, which every current browser and Windows supports.
function encodeIco(size, png) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(1, 4)
  const entry = Buffer.alloc(16)
  entry[0] = size >= 256 ? 0 : size
  entry[1] = size >= 256 ? 0 : size
  entry[4] = 1
  entry[6] = 32
  entry.writeUInt32LE(png.length, 8)
  entry.writeUInt32LE(22, 12)
  return Buffer.concat([header, entry, png])
}

function distanceToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1
  const dy = y2 - y1
  const lengthSquared = dx * dx + dy * dy
  const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared))
  const cx = x1 + t * dx
  const cy = y1 + t * dy
  return Math.hypot(px - cx, py - cy)
}

function insideRoundedSquare(x, y, size, radius) {
  const min = 0
  const max = size
  if (x < min || y < min || x > max || y > max) return false
  const cx = Math.min(Math.max(x, min + radius), max - radius)
  const cy = Math.min(Math.max(y, min + radius), max - radius)
  return Math.hypot(x - cx, y - cy) <= radius
}

function drawIcon(size) {
  const rgba = Buffer.alloc(size * size * 4)
  const radius = size * 0.22
  const thickness = size * 0.085
  const strokes = [
    [0.24, 0.3, 0.37, 0.7],
    [0.37, 0.7, 0.5, 0.44],
    [0.5, 0.44, 0.63, 0.7],
    [0.63, 0.7, 0.76, 0.3],
  ]

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const px = x + 0.5
      const py = y + 0.5
      let pixel = null
      if (insideRoundedSquare(px, py, size, radius)) {
        pixel = brand
        let distance = Infinity
        for (const [x1, y1, x2, y2] of strokes) {
          distance = Math.min(distance, distanceToSegment(px, py, x1 * size, y1 * size, x2 * size, y2 * size))
        }
        if (distance <= thickness / 2) pixel = white
      }
      const offset = (y * size + x) * 4
      if (pixel) {
        rgba[offset] = pixel[0]
        rgba[offset + 1] = pixel[1]
        rgba[offset + 2] = pixel[2]
        rgba[offset + 3] = 255
      }
    }
  }
  return encodePng(size, size, rgba)
}

mkdirSync(resolve(root, 'public'), { recursive: true })

const logoPng = drawIcon(512)
writeFileSync(resolve(root, 'public/logo.png'), logoPng)
writeFileSync(resolve(root, 'public/icon.png'), logoPng)
writeFileSync(resolve(root, 'public/apple-icon.png'), drawIcon(180))
writeFileSync(resolve(root, 'public/favicon.ico'), encodeIco(32, drawIcon(32)))

console.log('Generated public/logo.png, public/icon.png, public/apple-icon.png and public/favicon.ico')
