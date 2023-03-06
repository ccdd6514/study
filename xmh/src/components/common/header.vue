<template>
  <article>
    <div class="header-left">
      <div
        :class="[
          isAIQ ? 'union-logo' : 'header-logo',
          homeColor ? 'white' : ''
        ]"
      ></div>
      <ul class="header-list" v-if="!isAdmin">
        <li>
          <router-link :to="{ path: '/' }"> 产品中心 </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/order/list' }"> 保单管理 </router-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
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
</style>
