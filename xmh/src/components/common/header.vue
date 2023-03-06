<template>
  <div class="header">
    <article
      class="header-body"
      :style="{ '--homecolor': homeColor || '#666' }"
    >
      <div class="header-left">
        <div
          :class="[
            isAIQ ? 'union-logo' : 'header-logo',
            homeColor ? 'white' : ''
          ]"
        ></div>
        <ul class="header-list">
          <li>
            <router-link :to="{ path: '/' }"> 产品中心 </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/order/list' }"> 保单管理 </router-link>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isAIQ: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  // box-shadow: 0 3px 5px #ebebeb;
}
.header-body {
  display: flex;
  width: 1190px;
  height: 80px;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.header-left,
.header-right {
  display: flex;
  align-items: center;
}
.union-logo {
  width: 246px;
  height: 45px;
  background: url(../../assets/imgs/xmh/union-logo.png) no-repeat;
  background-size: contain;
  &.white {
    background: url(../../assets/imgs/xmh/union-white-logo.png) no-repeat;
    background-size: contain;
  }
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
  > li {
    padding: 0 20px;
    line-height: 32px;
    > a {
      color: var(--homecolor);
      font-size: 16px;
      font-weight: 500;
    }
    .logout {
      cursor: pointer;
    }
    &.active {
      background-color: var(--btncolor);
      border-radius: 20px;
      > a {
        color: #fff;
      }
    }
  }
}
</style>
