const path = require('path')
const glob = require('glob')
const libs = require('./index').libs

function getEntry(globPath) {
  var entries = {}, basename;
  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry))
    entries[basename] = [entry]
  })
  return entries
}
const pageEntries = getEntry("./src/views/*/*.js"); // 获取对应 html 入口文件文件
const entries = {}

for (let key in pageEntries) {
  entries[key] = pageEntries[key]
}

for (let key in libs) {
  entries[key] = libs[key]
}

module.exports = {
  pageEntries: pageEntries,
  entries: entries
}
