// This script generates the local static placeholder assets including pdf resume and portrait images.
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// This function creates a simple valid uncompressed png file with given dimensions and rgba color.
function createPng(width, height, r, g, b, a = 255) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // This block constructs the ihdr chunk with dimensions and color type.
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData.writeUInt8(8, 8);
  ihdrData.writeUInt8(6, 9);
  ihdrData.writeUInt8(0, 10);
  ihdrData.writeUInt8(0, 11);
  ihdrData.writeUInt8(0, 12);
  const ihdr = makeChunk('IHDR', ihdrData);

  // This block builds raw pixel scanlines with a filter byte per line.
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const factor = 1 - (Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)) / (width * 0.7));
      const light = Math.max(0.6, Math.min(1.2, factor));
      rawData[pxOffset] = Math.min(255, Math.floor(r * light));
      rawData[pxOffset + 1] = Math.min(255, Math.floor(g * light));
      rawData[pxOffset + 2] = Math.min(255, Math.floor(b * light));
      rawData[pxOffset + 3] = a;
    }
  }

  // This block compresses scanline data and creates the idat chunk.
  const compressed = zlib.deflateSync(rawData);
  const idat = makeChunk('IDAT', compressed);

  // This block constructs the iend chunk.
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

// This helper function packages data into a standard png chunk with crc32.
function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc >>> 0, 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

// This table stores crc32 precalculated values for png chunk verification.
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[n] = c;
}

// This function calculates crc32 checksum for png buffers.
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return c ^ 0xffffffff;
}

// Ensure images directory exists
fs.mkdirSync(path.join(__dirname, '../public/images'), { recursive: true });

// This block generates a warm studio amber portrait png for the hero section.
const heroPng = createPng(600, 750, 194, 89, 10);
fs.writeFileSync(path.join(__dirname, '../public/images/hero-portrait.png'), heroPng);

// This block generates a sleek monochrome portrait png for the about section.
const aboutPng = createPng(500, 600, 45, 48, 55);
fs.writeFileSync(path.join(__dirname, '../public/images/about-portrait.png'), aboutPng);

// This block creates a valid standard pdf resume document.
const pdfLines = [
  '%PDF-1.4',
  '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
  '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj',
  '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj',
  '4 0 obj << /Length 280 >> stream',
  'BT /F1 22 Tf 50 720 Td (Amr Agouriane - Mobile Software Engineer) Tj',
  '/F1 12 Tf 0 -30 Td (Specializing in Flutter, React Native, and .NET MAUI) Tj',
  '0 -20 Td (Location: Morocco | Email: amr.agouriane@gmail.com) Tj',
  '0 -20 Td (Experience: 10+ Projects, 3+ Internships, Offline-First Architecture) Tj ET',
  'endstream endobj',
  '5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj',
  'xref 0 6 0000000000 65535 f 0000000009 00000 n 0000000058 00000 n 0000000115 00000 n 0000000244 00000 n 0000000570 00000 n ',
  'trailer << /Size 6 /Root 1 0 R >> startxref 639 %%EOF'
];

fs.writeFileSync(path.join(__dirname, '../public/Amr_Agouriane_CV.pdf'), pdfLines.join('\n'));
console.log('Successfully generated hero-portrait.png, about-portrait.png, and Amr_Agouriane_CV.pdf');
