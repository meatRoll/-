const fs = require('fs')
const path = require('path')
const ChromeExtension = require('crx')

const keyPath = path.resolve(__dirname, 'key.pem')
const privateKey = fs.readFileSync(keyPath)
const crx = new ChromeExtension({ privateKey })

const targetPath = path.resolve(__dirname, 'src')
const crxDirPath = path.resolve(__dirname, 'crx')
const crxPath = path.resolve(crxDirPath, 'SurfingWithMeatball.crx')
crx.load(targetPath)
  .then((crx) => crx.pack())
  .then((crxBuffer) => {
    if (!fs.existsSync(crxDirPath)) {
      fs.mkdirSync(crxDirPath)
    }
    fs.writeFileSync(crxPath, crxBuffer)
  })
  .catch((err) => console.error(err))

