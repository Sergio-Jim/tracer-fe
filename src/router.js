import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
