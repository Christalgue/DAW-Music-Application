<template>
  <div id="signup-form">
    <form action="/signup" method="post" autocomplete="off">
      <div class="signupbox">
        <label for="name"><b>Name</b></label>
        <input type="text" name="name">

        <label for="email"><b>Email</b></label>
        <input type="text" name="email">

        <label for="password"><b>Password</b></label>
        <input type="password" name="password">
            
        <button type="submit">Sign up</button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "SignUp"
};
</script>


<style>
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
