import count from './js/count'
import sum from './js/sum'
import './css/index.css'
import './less/index.less'
import './sass/index.scss'
import './css/iconfont.css'

// import { mul } from './js/math'

let bcssc = 2321
console.log(count(1, 2))
console.log(sum(1, 2))
console.log([1, 2, 3].includes(1), bcssc)
const test = (a, b) => a + b
test()

document.getElementById('btn').onclick = function () {
  // eslint不能识别动态导入需要，需要额外追加配置
  // webpack魔法命名
  import(
    /* webpackChunkName: "math", webpackPrefetch: true */ './js/math'
  ).then(({ mul }) => {
    console.log(mul(3, 3))
  })
}

new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 1000)
})

const arr = [1, 2, 3, 4]
console.log(arr.includes(1))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
