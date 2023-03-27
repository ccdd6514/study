class Dom {
    createElement(el) {
        return document.createElement(el);
    }
    //填充文本
    setText(el, text) {
        el.textContent = text;
    }
    //渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item) => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
//继承extends(可继承相应的方法)
//类型约束implements
class Vue extends Dom {
    constructor(options) {
        super(); //继承需要写在开头
        this.options = options;
        this.init();
    }
    init() {
        let data = {
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
        };
        let app = typeof this.options.el === 'string'
            ? document.querySelector(this.options.el)
            : this.options.el;
        app.appendChild(this.render(data));
    }
}
new Vue({
    el: '#app',
});
