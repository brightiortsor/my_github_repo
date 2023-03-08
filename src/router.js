import Vue from "vue";
import Router from "vue-router";
import AllRepos from "./components/AllRepos.vue";
import SingleRepo from "./components/SingleRepo.vue";
import NotFound from "./components/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/all-repos",
      name: "all-repos",
      component: AllRepos,
      children: [
        {
          path: ":id",
          name: "single-repo",
          component: SingleRepo,
        },
      ],
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
