<template>
  <Layout></Layout>
</template>

<script setup lang='ts'>
import { reactive } from "vue"
import Layout from './Layout/index.vue'

const man = reactive({ name: 'ccdd1', test: 'sdfds' })
console.log(man)

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
