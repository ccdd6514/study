const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: true,
  configureWebpack: (config) => {
    config.mode = 'development'
    config.devtool = 'source-map'
    // if (process.env.NODE_ENV === 'production') {
    //   // 生产环境配置
    //   config.devtool = 'cheap-source-map';
    //   // config.optimization.minimize = true;
    // } else {
    //   // 开发环境配置
    //   config.devtool = 'hidden-source-map';
    // }
  },
})
