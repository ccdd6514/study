<template>
  <div class="footer">
    <article class="footer-body">
      <div class="footer-top">
        <div class="footer-logo"></div>
        <div class="footer-contact">
          <p>联系我们</p>
          <a href="javascript:;">400-8818-796</a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="left-side">
          <div class="license" style="margin-bottom: 21px">
            <div style="margin-right: 56px">
              保险中介许可证：203468000000800
            </div>
            <div>创信保险销售：913301033419214815</div>
          </div>
          <div class="license">
            <div>版权所有 ©2022 创信保险销售有限公司</div>
            <div class="rights">
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402005203"
              >
                <img src="../../assets/imgs/beian.png" />粤公网安备
                44030402005204号
              </a>
            </div>
            <div class="rights">
              <a target="_blank" href="https://beian.miit.gov.cn/"
                >粤ICP备2021138957号</a
              >
            </div>
          </div>
        </div>
        <div class="right-side">
          <ul class="footer-right-box">
            <li>
              <div class="circle wx"></div>
              <div class="popRegt">
                <div>
                  <p class="title">客服在线咨询</p>
                  <p class="subtitle">微信扫一扫添加</p>
                </div>
                <div class="qrWrap">
                  <img src="../../assets/imgs/xmh/cs1-qrcode.png" />
                </div>
              </div>
            </li>
            <li>
              <div class="circle service"></div>
              <div class="popRegt">
                <div>
                  <p class="title">客服在线咨询</p>
                  <p class="subtitle">微信扫一扫添加</p>
                </div>
                <div class="qrWrap">
                  <img src="../../assets/imgs/xmh/cs2-qrcode.png" />
                </div>
              </div>
            </li>
          </ul>
          <p class="contact-me" style="margin-bottom: 21px">
            邮箱：cs@chuangxinbaoxian.com
          </p>
          <p class="contact-me">
            地址：深圳市福田区梅林街道孖岭社区凯丰路10号翠林大厦20层02室
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
  data() {
    return {};
  },
};
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
  margin-top: 50px;
}
.footer-right-box {
  display: flex;
  justify-content: flex-end;
  margin-top: 6px;
  margin-bottom: 11px;
  li {
    position: relative;
  }
  .title {
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #fff;
  }
  .subtitle {
    height: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: rgba(255, 255, 255, 0.7);
  }
}
.circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f7f8fc;
  margin-left: 18px;
}
.popRegt {
  display: none;
  > div:nth-of-type(1) {
    flex-grow: 1;
    margin-top: 24px;
    margin-left: 16px;
  }
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
.wx.circle {
  background: url("../../assets/imgs/xmh/cs1-gray.png") no-repeat;
  background-size: contain;
}
.service.circle {
  background: url("../../assets/imgs/xmh/cs2-gray.png") no-repeat;
  background-size: contain;
}
.wx.circle:hover + .popRegt,
.circle:hover + .popRegt {
  display: flex;
  position: absolute;
  width: 236px;
  height: 100px;
  background: #000000;
  opacity: 0.89;
  top: -110px;
  left: 50%;
  transform: translateX(calc(-50% + 5px));
  &::after {
    display: block;
    position: absolute;
    content: "";
    border-style: solid;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px 5px 0 5px;
    border-color: #000 transparent transparent transparent;
  }
}
.wx.circle:hover {
  background: url("../../assets/imgs/xmh/cs1.png") no-repeat;
  background-size: contain;
}
.service.circle:hover {
  background: url("../../assets/imgs/xmh/cs2.png") no-repeat;
  background-size: contain;
}
.rights {
  margin-left: 48px;
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  a {
    color: #44cecc;
    img {
      width: 12px;
      margin-right: 4px;
    }
  }
}
.license {
  display: flex;
  align-items: center;
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
.contact-me {
  height: 20px;
  font-size: 12px;
  font-family: SourceHanSansSC-Regular, SourceHanSansSC;
  font-weight: 400;
  color: #6f7598;
  line-height: 20px;
  text-align: right;
  a {
    color: #6f7598;
  }
  a:hover {
    color: #44cecc;
  }
}
</style>
