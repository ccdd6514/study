<template>
  <div class="footer">
    <article class="footer-body">
      <div class="footer-top">
        <div class="footer-logo"></div>
        <div class="footer-contact">
          <p>资讯热线 周一至周五9:00-18:00</p>
          <a href="javascript:;">400-8818-796</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="left-side">
          <div class="license">
            <div>版权所有 ©2022 创信保险销售有限公司</div>
            <div class="license-bottom">
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402005203"
              >
                <img src="../../assets/imgs/beian.png" />粤公网安备
                44030402005204号
              </a>
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402005203"
              >
                <img src="../../assets/imgs/beian.png" />粤公网安备
                44030402005204号
              </a>
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="contact">
            <div>联系我们</div>
            <div>商务合作:xxxxxxxxxxxxxxxxx</div>
            <div>地址:xxxxxxxxxxxxxxxxxxxx</div>
          </div>
          <div class="qrCode">
            <div class="qrWrap">
              <img src="../../assets/imgs/xmh/cs2-qrcode.png" />
            </div>
            <div class="qrWrap">
              <img src="../../assets/imgs/xmh/cs2-qrcode.png" />
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 218px;
  background-color: #fff;
}
.footer-body {
  width: 1190px;
  margin: 0 auto;
}
.footer-top {
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eceff3;
  > .footer-logo {
    width: 146px;
    height: 45px;
    background: url("../../assets/imgs/xmh/xmh-logo-gray.png") no-repeat;
    background-size: contain;
  }
  > .footer-contact {
    text-align: right;
    p {
      font-size: 12px;
      color: #6f7598;
    }
    a {
      font-size: 24px;
      color: #44cecc;
    }
  }
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}
.left-side {
  margin-top: 20px;

  .license {
  font-size: 12px;
  height: 20px;
  font-weight: 400;
  color: #6f7598;
  line-height: 20px;
  a {
    color: #6f7598;
  }
  a:hover {
    color: #44cecc;
  }
}
.license-bottom {
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
    img {
      width: 12px;
      margin-right: 4px;
    }
  }
  a:hover{
    color: #44cecc;
  }
}
}
.right-side{
  display: flex;
    .qrCode{
      display: flex;
      .qrWrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        > img {
          width: 80px;
          height: 80px;
          margin: 6px;
        }
      }
    }

}
</style>
