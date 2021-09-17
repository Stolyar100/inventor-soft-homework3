import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/views/Auth.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!store.getters.isLoggedIn && to.name !== "Auth") {
    next({ name: "Auth" });
  }
  next();
});

router.beforeEach((to, from, next) => {
  if (store.getters.isLoggedIn && to.name === "Auth") {
    next({ name: "Home" });
  }
  next();
});

export default router;
