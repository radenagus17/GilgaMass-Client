import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/tracking",
    name: "TrackingPage",
    component: () => import("@/views/TrackingPage.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("access_token") && to.name === "MainContent") next({ name: "Login" });
      else next();
    },
    redirect: { name: "MainContent" },
    children: [
      {
        path: "main_content",
        name: "MainContent",
        component: () => import("@/components/MainContent.vue"),
      },
      {
        path: "build_target",
        name: "BuildTarget",
        component: () => import("@/components/BuildTarget.vue"),
      },
      {
        path: "edit_history/:id",
        name: "EditHistory",
        component: () => import("@/components/EditHistory.vue"),
      },
      {
        path: "history_detail",
        name: "DetailHistory",
        component: () => import("@/views/DetailHistory.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token") && to.name == "Login") next({ name: "TrackingPage" });
  else next();
});

export default router;
