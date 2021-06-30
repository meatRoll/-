const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
const { TARGET_PATH, DIST_PATH, checkDist } = require('./common')

checkDist()
const zipPath = path.resolve(DIST_PATH, 'SurfingWithMeatball.zip')
const ws = fs.createWriteStream(zipPath)
const archive = archiver('zip', {
  zlib: {
    level: 9
  }
})

ws.on('close', () => {
  console.log(`${archive.pointer()} total bytes`)
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

ws.on('end', () => {
  console.log('Data has been drained');
});

archive.on('warning', (err) => {
  console.warn(err)
});

archive.on('error', function(err) {
  console.error(err)
});

archive.pipe(ws)
archive.directory(TARGET_PATH, false)
archive.finalize()
