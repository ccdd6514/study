<template>
  <!-- <Layout></Layout> -->
  <waterFall></waterFall>
</template>

<script setup lang='ts'>
import { reactive } from "vue"
// import Layout from './Layout/index.vue'
import waterFall from './components/waterFall/index.vue'

const man = reactive({ name: 'ccdd1', test: 'sdfds' })
console.log(man)

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
