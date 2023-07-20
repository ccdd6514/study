<template>
  <div class="">指令</div>
  <div v-test:test="{ background: 'red' }" class="box"></div>
</template>

<script setup lang='ts'>
import { ref, Directive, DirectiveBinding } from "vue"
const flag = ref(true)

const vTest: Directive = {
  created() {
    console.log('====>created')
  },
  beforeMount() {
    console.log('====>beforeMount')
  },
  mounted(el: HTMLElement, dir: DirectiveBinding) {
    console.log('====>mounted',)
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    console.log('====>beforeUpdate')
  },
  updated() {
    console.log('====>updated')
  },
}

</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px
}
</style>
