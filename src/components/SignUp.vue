<template>
  <div id="signup-form">
    <form autocomplete="off" @submit.prevent="signup">
      <div class="signupbox">
        <label for="name"><b>Name</b></label>
        <validation-provider rules="name-required" v-slot="{ errors }">
          <input v-model="name" type="text" />
          <span class="errorMessage">{{ errors[0] }}</span>
        </validation-provider>
        <br/>

        <label for="email"><b>Email</b></label>
        <validation-provider rules="email-required" v-slot="{ errors }">
          <input v-model="email" type="email" v-bind:class="{ errorMessage: isEmailError }" @keydown="clearError" />
          <span class="errorMessage">{{ errors[0] }}</span>
        </validation-provider>
        <br/>

        <label for="password"><b>Password</b></label>
        <validation-provider rules="password-required" v-slot="{ errors }">
          <input v-model="password" type="password" />
          <span class="errorMessage">{{ errors[0] }}</span>
        </validation-provider>
        <br/>
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import * as api from "../scripts/api";

extend('name-required', {
  ...required,
  message: 'Name field is required'
});

extend('email-required', {
  ...required,
  message: 'Email field is required'
});

extend('password-required', {
  ...required,
  message: 'Password field is required'
});

export default {
  name: "SignUp",
  components: {
    ValidationProvider
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isEmailError: false
    };
  },
  methods: {
    signup() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      api.createUser(this.name, this.email, this.password)
      .then(response => {
        if (response.status == 200) {
          this.name = "";
          this.email = "";
          this.password = "";
          alert("Thank you for signing up, you may login now."); // TODO: time permitting, use a prettier message for user feedback
          this.$emit("SignedUpShowLogin");
        }
        else {
          this.email = "Not available, choose again!";
          this.password = "";
          this.isEmailError = true;
        }
      })
      .catch(err => {
        this.email = "Not available, choose again!";
        this.password = "";
        this.isEmailError = true;
      });
      
    },
    clearError() {
      if (this.isEmailError) {
        this.email = "";
        this.isEmailError = false;
      }
    }
  }
};
</script>

<style scoped>
input[type="text"],
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
