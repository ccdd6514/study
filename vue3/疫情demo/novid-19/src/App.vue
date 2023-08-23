<template>
  <div class="box" :style="{ background: `url(${bg})` }">
    <div style="color:white" class="box-left"></div>
    <div class="box-center" id="china">
    </div>
    <div style="color:white" class="box-right"></div>
  </div>
</template>

<script setup lang='ts'>
import bg from './assets/1.jpg'
import { ref, onMounted } from "vue"
import * as echarts from 'echarts'
import { useStore } from './stores/index'
import './assets/china'
import { geoCoordMap } from './assets/geoMap'
import 'animate.css'
const store = useStore()



onMounted(async () => {
  await store.getList()
  const city = store.list.areaTree[2].children
  console.log(city)
  const data = city.map((v: any) => {
    console.log(v.name, geoCoordMap[v.name].concat(v.today.confirm))
    return {
      name: v.name,
      value: geoCoordMap[v.name].concat(v.today.confirm)
    }
  })
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)

  // const data = [{

  //   name: "内蒙古",
  //   value: [110.3467, 41.4899],
  //   itemStyle: {
  //     areaColor: 'red'
  //   }

  // }]

  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        //  normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },

      },
      emphasis: {
        areaColor: "#0f5d9d",
      },

      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2]
          }
        },
        itemStyle: {
          color: '#1E90FF', //标志颜色
        },
        data: data,
      },
    ],
  })
})

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
    width: 100%;
    // flex: 1;
  }

  &-right {
    width: 450px;
  }
}
</style>