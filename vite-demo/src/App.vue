<template>
  <div id="app">
    <button @click="flag = !flag">change</button>
    <div>{{ flag }}</div>
    <div id="resize-box" v-resize="resizeTest">可拖拽自定义hook</div>
    <!-- <Layout></Layout> -->
    <!-- <waterFall></waterFall> -->
    <!-- <tsxCom></tsxCom> -->
    <!-- <directive></directive> -->
    <!-- <lazy></lazy> -->
  </div>
</template>

<script setup lang='ts'>
// import Layout from './Layout/index.vue'
// import waterFall from './components/waterFall/index.vue'
// import tsxCom from './App'
// import directive from './components/directive/index.vue'
// import auth from './components/directive/auth.vue'
// import move from './components/directive/move.vue'
// import lazy from './components/directive/lazy.vue'
// import useResize from 'v-resize-ccddxy'

// import { onMounted } from 'vue';

// onMounted(() => {
//   useResize(document.querySelector('#resize-box') as HTMLElement, (e: any) => {
//     console.log(e)
//   })
//   console.log(useResize)
// })

const resizeTest = (e: any) => {
  console.log(e);

}

let flag = ref(false)

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  overflow: auto;
}

#resize-box {
  width: 200px;
  height: 200px;
  background-color: pink;
  resize: both;
  overflow: hidden
}
</style>
