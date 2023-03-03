import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Alert from "../src/components/alert/alert.js";
Vue.prototype.$Alert = Alert;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
