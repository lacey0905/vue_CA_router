import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 