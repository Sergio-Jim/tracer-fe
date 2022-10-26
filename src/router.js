import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/login.vue";
import Dashboard from "./pages/dashboard";
import DashboardMain from "./pages/dashboard/index.vue";
import ListClient from "./pages/dashboard/listClient.vue";
import Search from "./pages/dashboard/search.vue";
import Reports from "./pages/dashboard/reports.vue";
import axios from "axios";

let headers = {
  'Content-Type':'application/json',
}

function setToken () {
  if(localStorage.getItem('token')){
    headers = {
      'Authorization':`Bearer ${localStorage.getItem('token')}`,
      'Content-Type':'application/json',
    }
  }  
}    

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
    beforeEnter: (to, from, next) => {
      setToken()
      if (localStorage.getItem("token") !== null) {
        axios({
          method:'GET',
          headers,
          url: process.env.NODE_ENV == 'production'? "" : "http://localhost:4000",
        }).then((res)=>{
          if(res.data.success)
            next()
          next({ name: 'login'})
        }).catch((err)=>{
          console.log(err, ' uuuuuuu')
        })
      } else {
        next({ name: "login" });
      }
    },
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
