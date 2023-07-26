import {  createVNode, render, VNode, App } from 'vue';
import Loading from './index.vue'
 
export default {
  install(app: App) {
    
    const Vnode = createVNode(Loading)
    render(Vnode, document.body)
    
    app.config.globalProperties.$loading = {
      show: Vnode.component?.exposed?.show,
      hide: Vnode.component?.exposed?.hide,
    }
  }
}