const https = require('follow-redirects').https
const { once } = require('events')
const fs = require('fs')
const { execSync } = require('child_process')
const path = require('path')
const { pipelinePromise: pipeline } = require('streamx')

;(async () => {
  const req = https.request('https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage')
  const response = once(req, 'response')
  req.end()
  const [res] = await response
  await pipeline(res, fs.createWriteStream(path.join(__dirname, 'appimagetool')))
  execSync(`chmod +x ${path.join(__dirname, 'appimagetool')}`)
  execSync(`cp ./index.js ${path.join(__dirname, 'template/index.js')}`)
  execSync(`cp -r ./bin ${path.join(__dirname, 'template/usr')}`)
  execSync(`cp "$(which node)" ${path.join(__dirname, 'template/node')}`)
  execSync(`./appimagetool ${path.join(__dirname, 'template')}`)
})()
