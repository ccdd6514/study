import { reactive } from './reflect/reactive'
import { effect } from './reflect/effect'
const user = reactive({
  name: "小满13",
  age: 18
})


  effect(() => {
      const rootElement = document.getElementById('app') as HTMLElement;
      rootElement.innerText = `${user.name} - ${user.age}`;
  })


setTimeout(() => {
  user.name = '大满很吊'
  setTimeout(() => {
    user.age = '23'
  }, 1000)
}, 2000)