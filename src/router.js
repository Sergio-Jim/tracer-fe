import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/login.vue";
import Dashboard from "./pages/dashboard";
import DashboardMain from "./pages/dashboard/index.vue";
import ListClient from "./pages/dashboard/listClient.vue";
import Search from "./pages/dashboard/search.vue";
import Reports from "./pages/dashboard/reports.vue";

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
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    props: true,
    children: [
      {
        path: "",
        component: DashboardMain,
      },
      {
        path: "listClient",
        component: ListClient,
      },
      {
        path: "search",
        component: Search,
      },
      {
        path: "reports",
        component: Reports,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
