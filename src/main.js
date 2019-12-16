import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Cookies from "js-cookie";

Vue.config.productionTip = false;

// handle authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    if (Cookies.get("token") === undefined) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
