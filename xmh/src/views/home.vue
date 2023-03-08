<template>
  <div class="home">
    <Header />
    <div style="height: 500px"></div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header.vue'
import Footer from '@/components/common/footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
