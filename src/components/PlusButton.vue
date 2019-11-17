<template>
  <a id="plus-button" class="tooltip" data-tooltip="Add to playlist">
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
  cursor: pointer;
}

#plus-button > img {
  width: 22px;
  height: 22px;
  vertical-align: middle;
}

a.tooltip {
  position: relative ;
}

a.tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute ;
  top: 1.1em;
  left: 1em;
  min-width: 13px;
  border: 1px #636262 solid;
  border-radius: 15px;
  padding: 7px;
  color: black;
  background-color: #ffffff ;
  z-index: 1;
} 
</style>
