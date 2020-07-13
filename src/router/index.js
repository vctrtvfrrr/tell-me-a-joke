import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // Default mood is 'neutral'
    redirect: { name: "face", params: { mood: "neutral" } }
  },
  {
    path: "/:mood",
    name: "face",
    component: () =>
      import(/* webpackChunkName: "window-face" */ "../views/WindowFace.vue"),
    // Sets the current mood of the page based on the URL,
    // if the user accesses the page directly or refresh the page manually.
    beforeEnter: (to, _, next) => {
      const mood = to.params.mood ? to.params.mood : "neutral";
      Store.commit("SET_MOOD", mood);
      next();
    }
  }
];

const router = new VueRouter({
  // Without history mode because must run on GitHub Pages
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
