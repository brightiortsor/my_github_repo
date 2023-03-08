import VueRouter from "vue-router";
import AllRepos from "./components/AllRepos.vue";
import SingleRepo from "./components/SingleRepo.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  { path: "////", component: AllRepos },
  { path: "////repo/:id", name: "repo", component: SingleRepo, props: true },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
