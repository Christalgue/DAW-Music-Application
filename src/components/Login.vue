<template>
  <div id="login-form">
    <form autocomplete="off" @submit.prevent="login">
      <div class="loginbox">
        <label for="email"><b>Email</b></label>
        <validation-provider rules="email-required" v-slot="{ errors }">
          <input v-model="email" type="email" v-bind:class="{ errorMessage: isLoginError }" @keydown="clearError" />
          <span class="errorMessage">{{ errors[0] }}</span>
        </validation-provider>
        <br/>

        <label for="password"><b>Password</b></label>
        <validation-provider rules="password-required" v-slot="{ errors }">
          <input v-model="password" type="password" />
          <span class="errorMessage">{{ errors[0] }}</span>
        </validation-provider>
        <br/>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import Cookies from "js-cookie";
import * as api from "../scripts/api";

extend('email-required', {
  ...required,
  message: 'Email field is required'
});

extend('password-required', {
  ...required,
  message: 'Password field is required'
});

export default {
  name: "Login",
  components: {
    ValidationProvider
  },
  data() {
    return {
      email: "",
      password: "",
      isLoginError: false
    };
  },
  methods: {
    login() {
      api.login(this.email, this.password)
      .then(response => {
        if (response.status !== 200) {
          this.email = "Wrong combination, try again!";
          this.password = "";
          this.isLoginError = true;
        } else {
          // set cookies
          response.json().then(response => {
            Cookies.set("token", response.token);
            Cookies.set("name", response.name);
            Cookies.set("id", response.id);
            Cookies.set("email", response.email);
            this.$router.go(-1); // now that user did log in, go where the user came from before the login
          });
        }
      })
      .catch(err => {
        
      });
    },
    clearError() {
      if (this.isLoginError) {
        this.email = "";
        this.password = "";
        this.isLoginError = false;
      }
    }
  }
};
</script>

<style scoped>
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 9px 0;
  display: inline-block;
  border: 1px solid #ccd;
  box-sizing: border-box;
  border-radius: 10px;
}

.errorMessage {
  font-weight: bold;
  font-size: 0.7em;
  color: red;
}
</style>
