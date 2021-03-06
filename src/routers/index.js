import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Search from "../views/Search.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
