<template>
  <a id="plus-button">
    <img src="../images/plus.svg" alt="Plus button" />
  </a>
</template>

<script>
export default {
  name: "PlusButton"
};
</script>

<style>
#plus-button {
  display: inline;
  padding-right: 1%;
  align-items: center;
}

#plus-button > img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}
</style>
