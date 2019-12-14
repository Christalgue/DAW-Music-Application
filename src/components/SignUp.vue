<template>
  <div id="signup-form">
    <form autocomplete="off" @submit.prevent="signup">
      <div class="signupbox">
        <label for="name"><b>Name</b></label>
        <input v-model="name" type="text">

        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email">

        <label for="password"><b>Password</b></label>
        <input v-model="password" type="password">
            
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "SignUp",
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      // TODO: sign up
      console.log(this.name)
      console.log(this.email)
      console.log(this.password)
    }
  }
};
</script>


<style>
input[type=text], input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 9px 0;
  display: inline-block;
  border: 1px solid #ccd;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
