import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    component: () => import("../views/mForm.vue"),
  },
  {
    path: "/checkbox",
    component: () => import("../views/mCheckbox.vue"),
  },
  {
    path: "/display",
    component: () => import("../views/mDisplay.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
