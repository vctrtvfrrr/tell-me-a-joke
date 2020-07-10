import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "face", params: { mood: "neutral" } }
  },
  {
    path: "/:mood",
    name: "face",
    component: () =>
      import(/* webpackChunkName: "window-face" */ "../views/WindowFace.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
