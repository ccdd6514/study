import { createApp } from 'vue'
import './vue3.d.ts'
// import './style.css'
import useResize from 'v-resize-ccddxy'
import App from './App.vue'

import loading from './plugin/loading'


createApp(App).use(useResize).use(loading).mount('#app')
