<template>
  <div class="xy-box">
    <div>
      <Menu></Menu>
    </div>
    <div class="xy-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue"
import Header from './Header/index.vue'
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'

</script>

<style lang="scss" scoped>
@include b(box) {
  @include bfc;
  display: flex;
  height: 100%;

  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
