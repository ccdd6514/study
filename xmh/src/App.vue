<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      handler: function (to, from) {
        console.log(to, from)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss"></style>
