<template>
  <div class="box">
    <button v-auth="'shop:create'">创建</button>
    <button v-auth="'shop:edit'">编辑</button>
    <button v-auth="'shop:delete'">删除</button>
  </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue'

localStorage.setItem('userId', 'xiaoyu')

//mock后台返回的数据
const permission = [
  'xiaoyu:shop:edit',
  'xiaoyu:shop:create',
  'xiaoyu:shop:delete',
]

const userId = localStorage.getItem('userId') as string
const vAuth: Directive<HTMLElement, string> = {
  mounted(el, binding) {
    console.log(permission.includes(userId + ':' + binding.value), userId + ':' + binding.value)
    if (!permission.includes(userId + ':' + binding.value)) {
      el.style.display = 'none'
    }
  },
  updated() {
    console.log('====>updated')
  },
}

</script>

<style lang="scss" scoped>
.box {
  button {
    margin: 10px
  }
}
</style>
