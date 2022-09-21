import { createRouter, createWebHistory } from "vue-router";
import pesquisarcep from "../views/PesquisarCep.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "pesquisarcep",
      component: pesquisarcep,
    },
  ],
});

export default router;
