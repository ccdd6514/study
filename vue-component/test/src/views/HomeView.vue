<template>
  <div class="home-style">
    <img alt="Vue logo" src="../assets/logo.png">
    <rSwiper ref="swiperDOM" class="swiper" @loadEnd="funLoadEnd" @transitionend="funTransitionend">
      <rSlide>
        <div class="box"></div>
      </rSlide>
      <rSlide>
        <div class="box box2"></div>
      </rSlide>
      <rSlide>
        <div class="box box3"></div>
      </rSlide>
    </rSwiper>
  </div>
</template>

<script>
// @ is an alias to /src
import {rSwiper, rSlide} from 'r-swiper'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    rSwiper,
    rSlide
  }
}
</script>
<style scope lang="scss">
.home-style {
  width: 100vw;
  height: 100vh;
  padding-top: 300px;

  .swiper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: pink;
  }

  .box {
    background: url('../assets/001.png') no-repeat center center;
    background-size: cover;
  }

  .box2 {
    background-image: url('../assets/003.png')
  }

  .box3 {
    background-image: url('../assets/004.png')
  }
}
</style>