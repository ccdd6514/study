<template>
  <div v-move class="box">
    <div class="content">内容</div>
  </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue'

const vMove: Directive<HTMLElement, string> = {

  mounted(el, binding) {
    let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement

    const mouseDown = (e: MouseEvent) => {
      let X = e.clientX - el.offsetLeft
      let Y = e.clientY - el.offsetTop

      const move = (e: MouseEvent) => {
        console.log(e)
        el.style.left = e.clientX - X + 'px'
        el.style.top = e.clientY - Y + 'px'
      }

      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move)
      })
    }
    moveElement.addEventListener('mousedown', mouseDown)
  },
}

</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  background: pink;

  .header {
    height: 20px;
    width: 100%;
    background-color: bisque;
  }

  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
