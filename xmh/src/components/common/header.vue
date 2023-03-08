<template>
  <div class="header">
    <article
      class="header-body"
      :style="{
        '--homeColor': homeColor || '#666',
        '--btnColor': btnColor || '#c72929',
      }"
    >
      <div :class="['header-logo', homeColor ? 'white' : '']"></div>
      <ul class="header-list">
        <li v-for="(item, index) in tabs" :key="index">
          <router-link
            :class="[curIndex === index ? 'active' : '']"
            :to="{ path: item.path }"
          >
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    homeColor: {
      type: String,
      default: ''
    },
    btnColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tabs: [
        { text: '首页', path: '/', name: 'home' },
        { text: '产品中心', path: '/product', name: 'product' },
        { text: '关于我们', path: '/about', name: 'about' },
        { text: '新闻资讯', path: '/news', name: 'news' },
        { text: '人才召集', path: '/job', name: 'job' }
      ],
      curIndex: 0
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        const name = to.name
        const index = this.tabs.findIndex(item => {
          return item.name === name
        }) || 0
        this.curIndex = index
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #fff;
}
.header-body {
  display: flex;
  width: 1190px;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;
}
.header-logo {
  width: 146px;
  height: 45px;
  background: url(../../assets/imgs/xmh/xmh-logo.png) no-repeat;
  background-size: contain;
  &.white {
    background: url(../../assets/imgs/xmh/xmh-logo-white.png) no-repeat;
    background-size: contain;
  }
}
.header-list {
  display: flex;
  // width: 100%;
  margin-left: 36px;
  li {
    padding: 0 20px;
    line-height: 32px;
    a {
      color: #666;
      font-size: 16px;
      font-weight: 500;
      &:hover {
        color: rgb(180, 57, 57);
      }
    }
    .active {
      color: var(--btnColor);
    }
  }
}
</style>
