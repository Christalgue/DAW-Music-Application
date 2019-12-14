<template>
  <div id="signup-form">
    <form autocomplete="off" @submit.prevent="signup">
      <div class="signupbox">
        <label for="name"><b>Name</b></label>
        <input v-model="name" type="text">

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email" v-bind:class="{ emailError: isEmailError }" @keydown="clearError">

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
      isEmailError: false
    }
  },
  methods: {
    signup () {
      let data = {name: this.name, email: this.email, password: this.password};
      sendPOST('/api/signup', data)
      .then(response => {
        if (response.status == 400) {
          this.email = "Not available, choose again!";
          this.password = "";
          this.isEmailError = true;
        } else { // success
          this.name = "";
          this.email = "";
          this.password = "";
          alert("Thank you for signing up, you may login now."); // TODO: time permitting, use a prettier message for user feedback
          this.$emit("SignedUpShowLogin");
        }
      });
    },
    clearError () {
      if (this.isEmailError) {
        this.email = "";
        this.isEmailError = false;
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
