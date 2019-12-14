<template>
  <div id="login-form">
    <form autocomplete="off" @submit.prevent="login">
      <div class="loginbox">
        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email" v-bind:class="{ loginError: isLoginError }" @keydown="clearError">

        <label for="password"><b>Password</b></label>
        <input v-model="password" type="password">
            
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import Cookies from 'js-cookie';
import { sendPOST } from '../backend/helpers';

export default {
  name: "Login",
  data () {
    return {
      email: '',
      password: '',
      isLoginError: false
    }
  },
  methods: {
    login () {
      let data = {email: this.email, password: this.password};
      sendPOST('/api/login', data)
      .then(response => {
        if (response.status == 400) {
          this.email = "Wrong combination, try again!";
          this.password = "";
          this.isLoginError = true;
        } else {
          response.json().then(response => {
            let in30Minutes = 1 / 2;  // TODO: change expiration (currently 12 hours)
            Cookies.set('token', response.token, {
                expires: in30Minutes
            });
          });
        }
      });
    },
    clearError () {
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
input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 9px 0;
  display: inline-block;
  border: 1px solid #ccd;
  box-sizing: border-box;
  border-radius: 10px;
}

.loginError {
  font-weight: bold;
  font-size: 0.7em;
  color: red;
}
</style>
