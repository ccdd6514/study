import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// import { createApp, createVNode } from 'vue';

// const App = {
//   data() {
//     return {
//       message: 'Hello World'
//     }
//   },

//   render(): JSX.Element {
//     console.log(createVNode('div', { class: 'wrapper' }, this.message))
//     return createVNode('div', { class: 'wrapper' }, this.message)
//   }
// };

// createApp(App).mount('#app');