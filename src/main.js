// import { createApp } from "vue";
// import App from "./App.vue";

// createApp(App).mount("#app");
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

createApp(App).use(router).mount("#app");
