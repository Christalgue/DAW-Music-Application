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
    console.log("AUTH REQUIRED");
    sendPOST("/api/auth", { token: Cookies.get("token") }).then(response => {
      console.log("SENT POST AUTH");
      if (response.status !== 200) {
        console.log("auth fail!");
        next("/login");
      } else {
        console.log("auth success");
        next();
      }
    });
  } else {
    console.log("auth was required and cookie worked!");
    next();
  }
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
