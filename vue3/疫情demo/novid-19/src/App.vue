<template>
  <div class="box" :style="{ background: `url(${bg})` }">
    <div style="color:white" class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div style="color:white" class="box-right"></div>
  </div>
</template>

<script setup lang='ts'>
import bg from './assets/1.jpg'
import { ref } from "vue"
import { useStore } from './stores/index'
const store = useStore()

const test = ref({ test: '' })

store.getList()


</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

@itemColor: #41b0db;
@itemBg: #223651;
@itemBorder: #212028;

.table {
  width: 100%;
  background: #212028;

  tr {
    th {
      padding: 5px;
      white-space: nowrap;
    }

    td {
      padding: 5px 10px;
      width: 100px;
      white-space: nowrap;
    }
  }
}

html,
body,
#app {
  height: 100%;
  overflow: hidden;
}

.box {
  height: 100%;
  display: flex;
  overflow: hidden;
  padding: 10px;

  &-left {
    width: 400px;

    &-pie {
      height: 320px;
      margin-top: 20px;
    }

    &-line {
      height: 320px;
      margin-top: 20px;
    }

    &-card {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto;

      section {
        background: @itemBg;
        border: 1px solid @itemBorder;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div:nth-child(2) {
          color: @itemColor;
          padding: 10px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
  }

  &-center {
    flex: 1;
  }

  &-right {
    width: 450px;
  }
}
</style>