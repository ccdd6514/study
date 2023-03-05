<template>
  <div>
    <i-button>普通按钮</i-button>
    <br />
    <i-button to="https://juejin.cn">链接按钮</i-button>
    <br />
    <i-button to="https://juejin.cn" target="_blank"
      >新窗口打开链接按钮</i-button
    >
  </div>
</template>
<script>
import iButton from "../components/button/mButton.vue";

export default {
  components: { iButton },
};
</script>
