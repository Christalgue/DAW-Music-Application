<template>
  <nav>
    <ul>
      <li>
        <input id="search" name="q" type="text" placeholder="Mots clés" />
      </li>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/album">Album</router-link>
      </li>
      <li>
        <router-link to="/artist">Artist</router-link>
      </li>
      <li>
        Michelle
      </li>
      <li>
        <!--TODO : A completer-->
        <router-link to="/settings">
<!--          <i class="fas fa-cog"></i>-->
          Setting
        </router-link>
      </li>
      <li>
        <!--TODO : A completer-->
        <router-link to="/">Log out</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav, ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: whitesmoke;
  border: black;
  border-radius: 2px;
}

li {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li > a {
  color: black;
  text-decoration: none;
}
</style>
