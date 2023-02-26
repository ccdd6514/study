// Node.js的核心模块，专门用来处理文件路径
const path = require('path')
// nodejs核心模块，直接使用
const os = require('os')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

// cpu核数
const threads = os.cpus().length
module.exports = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: undefined,
    // filename: 入口文件输出文件名
    filename: 'static/js/[name].js', // 入口文件打包输出资源命名方式
    chunkFilename: 'static/js/[name].chunk.js', // 动态导入输出资源命名方式
    assetModuleFilename: 'static/media/[name].[hash][ext]', // 图片、字体等资源命名方式（注意用hash）
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
          {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                //设置小于10kb则转换base64，否则打包出资源
                maxSize: 10 * 1024, // 4kb
              },
            },
            // generator: {
            //   filename: 'static/[hash:10][ext][query]', //生成文件名名称
            // },
          },
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: 'asset/resource',
            // generator: {
            //   filename: 'static/media/[hash:8][ext][query]',
            // },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // 排除node_modules代码不编译
            use: [
              {
                loader: 'thread-loader', // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true, // 开启babel编译缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ['@babel/plugin-transform-runtime'], // 减少代码体积
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      //检测哪些文件
      context: path.resolve(__dirname, '../src'),
      exclude: 'node_modules', // 默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        '../node_modules/.cache/.eslintcache'
      ),
      threads,
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
      new TerserPlugin({
        parallel: threads, // 开启多进程
      }),
    ],
  },
  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true,
  },
  // 模式
  mode: 'development', // 开发模式
  devtool: 'cheap-module-source-map',
}
