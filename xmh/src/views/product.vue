<template>
  <div class="product">
    <div class="product-body">
      <div class="product-body-left">
        left
      </div>
      <div class="product-body-right">
        right
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductView'
}
</script>

<style lang="scss" scoped>
.product{
  height: 500px;
  width: 100%;

  .product-body{
    display: flex;
    width: 1190px;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
    align-items: center;

    .product-body-left{
      width: 150px;
      height: 100%;
      background: pink;

    }

    .product-body-right{
      flex: 1;
      height: 100%;
      background: palegreen;
    }
  }
}
</style>
