<template>
  <div class="news">
    <div class="banner">
      <img src="../assets/imgs/xmh/banner.png" />
    </div>
    <div class="news-body">
      <div class="news-list">
        <div class="news-list-item" v-for="(item,index) in newsList" :key="index">
          <div class="item-img">
            <img :src="item.img" alt="">
          </div>
          <div class="item-body">
            <div class="item-title">{{item.title}}</div>
            <div class="item-content">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'newsView',
  data() {
    return {
      newsList: [{ img: '', title: '降价xxxxxxxxxxxxxx', content: '当地时间xxxxxxxxxxxxxxxxxx' }, { img: '', title: '降价xxxxxxxxxxxxxx', content: '当地时间xxxxxxxxxxxxxxxxxx' }]
    }
  }
}
</script>

<style lang="scss" scoped>
.news{
  width: 100%;

  .banner{
    width: 100%;
    height: 460px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    img {
      width: auto;
    }
  }

  .news-body{
    display: flex;
    width: 1190px;
    height: 500px;
    padding: 0 20px;
    margin: 0 auto;

    .news-list{
      margin-top: 10px;
      cursor: pointer;
      color: black;

      .news-list-item{
        display: flex;
        font-size: 16px;
        justify-content: center;

        .item-img{
          width: 100px;
          height: 100px;
          background: rgb(128, 113, 113);
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
