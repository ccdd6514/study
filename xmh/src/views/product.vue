<template>
  <div class="product">
    <div class="banner">
      <img src="../assets/imgs/xmh/banner.png" />
    </div>
    <div class="product-body">
      <div class="product-body-left">
      <div class="title">
        <i class="icon"></i>
        <div class="text">
          产品列表
        </div>
      </div>
        <div class="product-list">
          <div :class="['product-list-item', curIndex === index ? 'active' : '']" v-for="(item,index) in productList" :key="index" @click="changeContent(item,index)">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="product-body-right">
        {{curContent}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductView',
  data() {
    return {
      productList: [{ name: '电商平台退货险', content: '2323' }, { name: '电商平台退货险11', content: '1111test' }],
      curContent: '',
      curIndex: 0
    }
  },
  methods: {
    changeContent(item, index) {
      console.log(item)
      this.curContent = item.content
      this.curIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.product{
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

  .product-body{
    display: flex;
    width: 1190px;
    height: 500px;
    padding: 0 20px;
    margin: 0 auto;
    align-items: center;

    .product-body-left{
      width: 150px;
      height: 100%;
      background: pink;
      .title{
        width:100%;
        height:35px;
        display: flex;
        align-items: center;
        padding-bottom:6px;
        .icon{
          display: block;
          width:20px;
          height: 20px;
          background-image: url('../assets/imgs/icon-order-manage.png');
          margin-right: 4px;
        }
        .text{
          font-size: 16px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #222222;
        }
      }
      .product-list{
        margin-top: 10px;
        cursor: pointer;
        color: black;
      }
      .product-list-item{
        font-size: 16px;
      }
      .active {
        background: #a59595;
      }
    }

    .product-body-right{
      flex: 1;
      height: 100%;
      background: palegreen;
    }
  }
}
</style>
