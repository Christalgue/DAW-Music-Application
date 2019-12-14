import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { isAuthenticated } from "./scripts/auth";

Vue.config.productionTip = false;

// handle authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated()) next("/login");
  else next();
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
