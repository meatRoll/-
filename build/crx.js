const fs = require('fs')
const path = require('path')
const ChromeExtension = require('crx')
const { KEY_PATH, TARGET_PATH, DIST_PATH, checkDist } = require('./common')

const privateKey = fs.readFileSync(KEY_PATH)
const crx = new ChromeExtension({ privateKey })

const crxPath = path.resolve(DIST_PATH, 'SurfingWithMeatball.crx')
crx.load(TARGET_PATH)
  .then((crx) => crx.pack())
  .then((crxBuffer) => {
    checkDist()
    fs.writeFileSync(crxPath, crxBuffer)
  })
  .catch((err) => console.error(err))

