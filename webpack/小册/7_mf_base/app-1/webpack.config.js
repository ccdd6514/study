const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devtool: false,
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: `http://localhost:8081/dist/`,
    library: 'app1',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'appTest1',
      filename: `remoteEntry.js`,
      exposes: {
        './utils': './src/utils',
      },
    }),
  ],
  devServer: {
    port: 8081,
    hot: true,
  },
}
