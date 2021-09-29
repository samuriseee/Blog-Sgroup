import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register";
import ForgotPass from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import CreateBlog from "../views/CreateBlog";
import BlogPreview from "../views/BlogPreview.vue";
import firebase from "firebase/app";
import "firebase/auth";


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta : {
      layout: "LoginLayout"
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta : {
      layout: "LoginLayout"
    },
  },
  {
    path: "/reset-password",
    name: "ForgotPass",
    component: ForgotPass,
    meta : {
      layout: "LoginLayout"
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requireAuth: true },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requireAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/blogs/:id",
    component: () => import("../views/BlogsDetail.vue"),
    meta: { requireAuth: true },
  },
  {
    path: "/create-blog",
    name: "createBlog",
    component: CreateBlog,
    meta: { requireAuth: true },
  },
  {
    path: "/blog-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: { requireAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  const isAuth = firebase.auth().currentUser;
  if (requireAuth && !isAuth) {
    next("/login");
  } else next();
});

export default router;
