<template>
  <div id="signup-form">
    <form autocomplete="off" @submit.prevent="signup">
      <div class="signupbox">
        <label for="name"><b>Name</b></label>
        <input v-model="name" type="text">

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email" v-bind:class="{ emailError: isEMailError }" @keydown="clearError">

        <label for="password"><b>Password</b></label>
        <input v-model="password" type="password">
            
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>


<script>
import { sendPOST } from '../backend/helpers';

export default {
  name: "SignUp",
  data () {
    return {
      name: '',
      email: '',
      password: '',
      isEMailError: false
    }
  },
  methods: {
    signup () {
      let data = {name: this.name, email: this.email, password: this.password};
      sendPOST('/api/signup', data, response => {
        if (response.status == 400) {
          this.email = "Not available, choose again!";
          this.isEMailError = true;
        }
      });
    },
    clearError () {
      if (this.isEMailError) {
        this.email = "";
        this.isEMailError = false;
      }
    }
  }
};
</script>


<style scoped>
input[type=text], input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 9px 0;
  display: inline-block;
  border: 1px solid #ccd;
  box-sizing: border-box;
  border-radius: 10px;
}

.emailError {
  font-weight: bold;
  font-size: 0.7em;
  color: red;
}
</style>
