import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store";

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
      import(/* webpackChunkName: "window-face" */ "../views/WindowFace.vue"),
    beforeEnter: (to, from, next) => {
      const mood = to.params.mood ? to.params.mood : "neutral";
      Store.commit("SET_MOOD", mood);
      next();
    }
  }
];

const router = new VueRouter({
  // Must run on GitHub Pages
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
