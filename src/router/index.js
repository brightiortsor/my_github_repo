import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/components/NotFound.vue";
import AllReposVue from "@/components/AllRepos.vue";
import SingleRepoVue from "@/components/SingleRepo.vue";

const routes = [
  {
    path: "/",
    redirect: "/repositories",
  },
  {
    path: "/repositories",
    component: AllReposVue,
  },
  {
    path: "/repositories/:id",
    name: "single-repo",
    component: SingleRepoVue,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
