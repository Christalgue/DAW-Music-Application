<template>
  <div id="login-form">
    <form action="/login" method="post" autocomplete="off">
      <div class="loginbox">
        <label for="username"><b>Email</b></label>
        <input type="text" name="username">

        <label for="password"><b>Password</b></label>
        <input type="password" name="password">
            
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Login",
};
</script>


<style scoped>
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 9px 0;
  display: inline-block;
  border: 1px solid #ccd;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
