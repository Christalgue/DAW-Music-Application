<template>
  <div>
    <div class="main-title bordered">
      <h1>Please log in or sign up to enjoy the music</h1>
    </div>
    <div class="main-title bordered">
      <div class="login-signup-box">
        <component v-bind:is="component" @SignedUpShowLogin="toggle"/>
        <br/><div id="signup-link" v-on:click="toggle">{{ signupLinkText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import SignUp from "./SignUp";

const SIGN_UP_TEXT = "No account? Click here to sign up";
const LOG_IN_TEXT = "Already have an account? Click here to log in";

export default {
  name: 'App',
  components: {
    Login,
    SignUp
  },
  data (){
    return {
      component: Login,
      signupLinkText: SIGN_UP_TEXT
    }
  },
  methods: {
    toggle(){
      if (this.component === Login) {
        this.component = SignUp;
        this.signupLinkText = LOG_IN_TEXT;
      } else {
        this.component = Login;
        this.signupLinkText = SIGN_UP_TEXT;
      }
    }
  }
}
</script>

<style scoped>
.login-signup-box {
  padding: 20px;
  margin: 1%;
  width: 15%;
  min-width: 200px;
}

#signup-link {
  font-size: 0.7em;
  cursor: pointer;
}
</style>