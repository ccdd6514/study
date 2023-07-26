<template>
  <div class="">{{ test }}</div>
</template>

<script setup lang='ts'>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onRenderTracked, onRenderTriggered } from "vue"
const test = ref({ test: 'aaaa' })

console.log('setup')

onBeforeMount(() => {
  console.log('beforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onRenderTracked((e) => {
  console.log('onRenderTracked', e)
})
onRenderTriggered((e) => {
  console.log('onRenderTriggered', e)
})


</script>

<style lang="scss" scoped></style>
