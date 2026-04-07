const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function getAllMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllMdFiles(full));
    else if (entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

function rel(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, '/');
}

module.exports = { getAllMdFiles, rel, ROOT };
