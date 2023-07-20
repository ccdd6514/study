<template>
  <!-- <Layout></Layout> -->
  <!-- <waterFall></waterFall> -->
  <!-- <tsxCom></tsxCom> -->
  <button @click="flag = !flag">change</button>
  <div>{{ flag }}</div>
  <!-- <directive></directive> -->
  <move></move>
</template>

<script setup lang='ts'>
// import Layout from './Layout/index.vue'
// import waterFall from './components/waterFall/index.vue'
// import tsxCom from './App'
// import directive from './components/directive/index.vue'
// import auth from './components/directive/auth.vue'
import move from './components/directive/move.vue'

let flag = ref(false)

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
