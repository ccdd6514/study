<template>
  <div class="wraps">
    <div
      :style="{ height: item.height + 'px', background: item.background, top: item.top + 'px', left: item.left + 'px' }"
      v-for="item in waterList" class="items"></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
const props = defineProps<{
  list: any[]
}>()
const waterList = reactive<any[]>([])
const init = () => {
  const heightList: any[] = []
  const width = 130;
  const x = document.body.clientWidth
  const column = Math.floor(x / width)

  for (let i = 0; i < props.list.length; i++) {
    if (i < column) {
      props.list[i].top = 10;
      props.list[i].left = i * width;
      heightList.push(props.list[i].height + 10)
      waterList.push(props.list[i])
    } else {
      let current = heightList[0]
      let index = 0;
      heightList.forEach((h, inx) => {
        if (current > h) {
          current = h;
          index = inx;
        }
      })
      console.log(current, 'c')
      props.list[i].top = (current + 20);
      console.log(props.list[i].top, 'top', i)
      props.list[i].left = index * width;
      heightList[index] = (heightList[index] + props.list[i].height + 20);
      waterList.push(props.list[i])

    }
  }
  console.log(props.list)
}

onMounted(() => {
  window.onresize = () => init()
  init()
})

</script>

<style scoped lang='scss'>
.wraps {
  position: relative;
  height: 100%;

  .items {
    position: absolute;
    width: 120px;
  }
}
</style>