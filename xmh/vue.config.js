/* eslint-disable */
const path = require('path')
const projectName = __dirname.match(/[\\|\/]\w+$/)[0].replace(/[\\+|\/+]/g, '')

function resolve (dir) {
  return path.join(__dirname, dir)
}
let CDN = '/'
if (process.env.NODE_ENV === 'production') {
  CDN = `https://sslstatic.xiaoyusan.com/${projectName}/`
} else if (process.env.NODE_ENV === 'development') {
  CDN = `/static/${projectName}/`
}
module.exports = {
  outputDir: `${projectName}`,
  indexPath: `xmh.html`,
  publicPath: CDN,
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    extract: false
  },
  chainWebpack: config => {
    config.plugin('html')
    .tap(args => {
      args[0].minify = false
      return args
    })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.output.filename = 'js/[name].js'
      config.output.chunkFilename = 'js/[name].js'
      config.devtool = 'inline-source-map'
      config.output.devtoolModuleFilenameTemplate = info => {
        const resPath = info.resourcePath
        if ((/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) || /node_modules/.test(resPath))
        {
            return `webpack:///${resPath}?${info.hash}`
        }
        return `webpack:///${resPath.replace('./src', 'src')}`
      }
    }
  }
}
