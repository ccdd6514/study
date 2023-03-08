<template>
  <div id="app">
    <common-header v-if="showHeader" />
    <router-view />
    <common-footer v-if="showFooter" />
  </div>
</template>

<script>

import commonHeader from '@/components/common/header.vue'
import commonFooter from '@/components/common/footer.vue'
export default {
  name: 'App',
  components: {
    commonHeader,
    commonFooter
  },
  data() {
    return {
      showHeader: false,
      showFooter: false
    }
  },
  watch: {
    $route: {
      handler: function (to, from) {
        const showHeader = to.meta.publicHeader !== undefined ? to.meta.publicHeader : true
        const showFooter = to.meta.publicFooter !== undefined ? to.meta.publicFooter : true
        this.showHeader = showHeader
        this.showFooter = showFooter
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss"></style>
