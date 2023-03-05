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
  {
    path: "/alert",
    component: () => import("../views/mAlert.vue"),
  },
  {
    path: "/demoRender",
    component: () => import("../views/demoRender.vue"),
  },
  {
    path: "/table-render",
    component: () => import("../views/table-render.vue"),
  },
  {
    path: "/table-render1",
    component: () => import("../views/table-render1.vue"),
  },
  {
    path: "/table-slot",
    component: () => import("../views/table-slot.vue"),
  },
  {
    path: "/table-slot1",
    component: () => import("../views/table-slot1.vue"),
  },
  {
    path: "/button",
    component: () => import("../views/mButton.vue"),
  },
  {
    path: "/tree",
    component: () => import("../views/tree.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
