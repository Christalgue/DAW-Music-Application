import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Cookies from "js-cookie";
import { sendPOST } from "./backend/helpers";

Vue.config.productionTip = false;

// handle authentication
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth) {
    sendPOST("/api/auth", { token: Cookies.get("token") }).then(response => {
      if (response.status !== 200) {
        next("/login");
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
