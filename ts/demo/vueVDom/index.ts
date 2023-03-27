interface Options {
  el: string | HTMLElement
}

interface VueCls {
  options: Options
  init(): void
}

interface Vnode {
  tag: string
  text?: string
  children?: Vnode[]
}

class Dom {
  createElement(el: string) {
    return document.createElement(el)
  }
  //填充文本
  setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }
  //渲染函数
  render(data: Vnode) {
    let root = this.createElement(data.tag)
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        let child = this.render(item)
        root.appendChild(child)
      })
    } else {
      this.setText(root, data.text)
    }
    return root
  }
}

//继承extends(可继承相应的方法)
//类型约束implements
class Vue extends Dom implements VueCls {
  options: Options
  constructor(options: Options) {
    super() //继承需要写在开头
    this.options = options
    this.init()
  }
  init(): void {
    let data: Vnode = {
      tag: 'div',
      children: [
        {
          tag: 'section',
          text: '我是字节的',
        },
        {
          tag: 'section',
          text: '我是字节的2',
        },
      ],
    }
    let app =
      typeof this.options.el === 'string'
        ? document.querySelector(this.options.el)
        : this.options.el
    app.appendChild(this.render(data))
  }
}

new Vue({
  el: '#app',
})
