
console.log(process.env.NODE_ENV)
import ts from 'rollup-plugin-typescript2'
import path from 'path'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import repacle from 'rollup-plugin-replace'

const isDev = () => {
  return process.env.NODE_ENV === 'development'
}
export default {
  input: "./src/index.ts",
  output: {
      file: path.resolve(__dirname, './lib/index.js'),
      format: "umd",
      sourcemap: true
  },

  plugins: [
    ts(),
    serve({
      open: true,
      port: 1988,
      openPage: '/public/index.html'
    }),
    livereload(),
    terser(),
    repacle({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
      // resolve(['.js', '.ts']),
      // isDev() && livereload(),
      // isDev() && serve({
      //     open: true,
      //     openPage: "/public/index.html"
      // })
  ]
}