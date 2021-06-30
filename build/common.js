const fs = require('fs')
const path = require('path')

const ROOT_PATH = path.resolve(__dirname, '..')
const KEY_PATH = path.resolve(ROOT_PATH, 'key.pem')
const TARGET_PATH = path.resolve(ROOT_PATH, 'src')
const DIST_PATH = path.resolve(ROOT_PATH, 'dist')

const checkDist = () => {
  if (!fs.existsSync(DIST_PATH)) {
    fs.mkdirSync(DIST_PATH)
  }
}

module.exports = {
  ROOT_PATH,
  KEY_PATH,
  TARGET_PATH,
  DIST_PATH,
  checkDist
}
