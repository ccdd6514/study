//proxy 代理
//reflect 反射
// Reflect.get(target, name, receiver)
// Reflect.get方法查找并返回target对象的name属性，如果没有该属性返回undefined

// Reflect.set(target, name,value, receiver)
// Reflect.set方法设置target对象的name属性等于value。

let person = { name: 'ccdd', age: 18 }

// let personProxy = new Proxy(person, {
//   get() {},
//   set(target, key, value, receiver) {
//     return true
//   },
//   //拦截函数调用
//   apply() {},
//   //拦截硬操作符
//   has() {},
//   //拦截for in
//   ownKeys() {},
//   //拦截删除操作
//   deleteProperty(target, p) {},
// })

let personProxy = new Proxy(person, {
  get(target, key, receiver) {
    if (target.age <= 18) {
      return Reflect.get(target, key, receiver)
    } else {
      return '小满成年啦'
    }
  },
  set(target, key, value, receiver) {
    return true
  },
})

console.log(personProxy.age)

const list: Set<Function> = new Set()

const autorun = (cb: Function) => {
  if (cb) {
    list.add(cb)
  }
}

const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      list.forEach((fn) => fn())
      console.log(list, target)
      return result
    },
  })
}

const person1 = observable({ name: '小满', attr: '威猛先生' })

autorun(() => {
  console.log('我变化了')
})

person1.attr = '威猛个捶捶'
