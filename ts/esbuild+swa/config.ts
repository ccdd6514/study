import esbuild from 'esbuild' //打包工具
import swc from '@swc/core' //类似于babel es6 转 es5
import fs from 'node:fs'
await esbuild.build({
  entryPoints: ['./index.ts'], //入口文件
  bundle: true, //模块单独打包
  loader: {
    '.js': 'js',
    '.ts': 'ts',
    '.jsx': 'jsx',
    '.tsx': 'tsx',
  },
  treeShaking: true,
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    {
      //实现自定义loader
      name: 'swc-loader',
      setup(build) {
        build.onLoad({ filter: /\.(js|ts|tsx|jsx)$/ }, (args) => {
          // console.log(args);
          const content = fs.readFileSync(args.path, 'utf-8')
          const { code } = swc.transformSync(content, {
            filename: args.path,
          })
          console.log(content, code)
          return {
            contents: code,
          }
        })
      },
    },
  ],
  outdir: 'dist',
})
