<template>
  <div class="">
    {{ man }}
  </div>
  <button @click="change">修改</button>
</template>

<script setup lang='ts'>
import { toRef, toRefs, toRaw, reactive } from "vue"

const man = reactive({ name: 'ccdd1', test: 'sdfds' })


const change = () => {
  man.name = 'ccddxiaoyu'
  console.log(man, toRaw(man))
}
</script>

<style lang="scss" scoped></style>
