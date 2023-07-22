<template>
  <div>
    <div v-for="item in arr">
      <img height="500" :data-index="item" v-lazy="item" width="360" alt="">
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue'
const images: Record<string, { default: string }> = import.meta.globEager('../../assets/images/*.*')
let arr = Object.values(images).map(v => v.default)

let vLazy: Directive<HTMLImageElement, string> = async (el, binding) => {
  let url = await import('../../assets/vue.svg')
  el.src = url.default;
  let observer = new IntersectionObserver((entries) => {
    console.log(entries[0], el)
    if (entries[0].intersectionRatio > 0 && entries[0].isIntersecting) {
      setTimeout(() => {
        el.src = binding.value;
        observer.unobserve(el)
      }, 2000)
    }
  })
  observer.observe(el)
}

</script>

<style scoped lang='less'></style>