<template>
  <div id="login-form">
    <form autocomplete="off" @submit.prevent="login">
      <div class="loginbox">
        <label for="email"><b>Email</b></label>
        <input v-model="email" type="email">

        <label for="password"><b>Password</b></label>
        <input v-model="password" type="password">
            
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      // TODO: auth
      console.log(this.email)
      console.log(this.password)
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
</style>
