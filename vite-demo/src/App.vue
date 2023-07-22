<template>
  <div id="app">
    <button @click="flag = !flag">change</button>
    <div>{{ flag }}</div>
    <!-- <Layout></Layout> -->
    <!-- <waterFall></waterFall> -->
    <!-- <tsxCom></tsxCom> -->
    <!-- <directive></directive> -->
    <lazy></lazy>
  </div>
</template>

<script setup lang='ts'>
// import Layout from './Layout/index.vue'
// import waterFall from './components/waterFall/index.vue'
// import tsxCom from './App'
// import directive from './components/directive/index.vue'
// import auth from './components/directive/auth.vue'
// import move from './components/directive/move.vue'
import lazy from './components/directive/lazy.vue'

let flag = ref(false)

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  overflow: auto;
}
</style>
