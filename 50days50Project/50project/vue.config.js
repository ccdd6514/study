/* eslint-disable */
const path = require('path')
const projectName = __dirname.match(/[\\|\/]\w+$/)[0].replace(/[\\+|\/+]/g, '')
const PrerenderSpaPlugin = require("prerender-spa-plugin");

module.exports = {
  publicPath: './',
  configureWebpack: config => {
    const PrerenderSPAPlugin = require('prerender-spa-plugin')
    const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, `${projectName}`), // 读取vue-cli已打包文件的根目录 prerender-spa-plugin会在这里开启一个服务
          // outputDir: path.join(__dirname, `${projectName}`), //经过prerender-spa-plugin处理的文件最终保存的地方
          // indexPath: path.join(__dirname, `${projectName}/xmh.html`), // 指定入口html
          routes: ['/', '/about'], // 哪些路由页面需要预渲染
          renderer: new Renderer({
            inject: {
              foo: 'bar'
            },
            headless: false,
            renderAfterDocumentEvent: 'render-event',
          })
        })
      ]
    }
  }
}
