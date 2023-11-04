import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "first-project",
    component: () => import("@/views/FirstProject.vue"),
  },
  {
    path: "/second-project",
    name: "second-project",
    component: () => import("@/views/SecondProject.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
