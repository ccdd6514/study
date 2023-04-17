interface EventFace {
  on: (name: string, fn: Function) => void
  emit: (name: string, ...args: Array<any>) => void
  off: (name: string, fn: Function) => void
  once: (name: string, fn: Function) => void
}

interface List {
  [key: string]: Array<Function>
}

class Dispatch implements EventFace {
  list: List
  constructor() {
    this.list = {}
  }
  on(name: string, fn: Function) {
    const callback = this.list[name] || []
    callback.push(fn)
    this.list[name] = callback
  }
  emit(name: string, ...args: Array<any>) {
    let eventName = this.list[name]
    if (name === 'post2') {
      console.log(eventName)
    }
    if (eventName) {
      eventName.forEach((fn) => {
        fn.apply(this, args)
      })
    } else {
      console.error('名称错误' + name)
    }
  }
  off(name: string, fn: Function) {
    let eventName = this.list[name]
    if (eventName && fn) {
      let index = eventName.findIndex((fns) => fns === fn)
      eventName.splice(index, 1)
    } else {
      console.error('名称错误' + name)
    }
  }
  once(name: string, fn: Function) {
    let de = (...args: Array<any>) => {
      fn.apply(this, args)
      this.off(name, de)
    }
    this.on(name, de)
  }
}

const o = new Dispatch()

o.on('post', (...args) => {
  console.log(1, args)
})

o.emit('post', 1, false, { name: 'xy' })

const fn = (...args: Array<any>) => {
  console.log(2, 'off', args)
}
o.on('post1', fn)
o.emit('post1', 2, true, { name: 'xy' })
o.off('post1', fn)

const fn1 = (...args: Array<any>) => {
  console.log(2, 'once', args)
}
o.once('post2', fn1)
o.emit('post2', 2, true, { name: 'xy1' })
o.emit('post2', 3, true, { name: 'xy2' })
o.emit('post2', 4, true, { name: 'xy3' })
console.log(o.list)
