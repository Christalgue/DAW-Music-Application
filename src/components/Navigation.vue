<template>
  <nav class="menu">
    <ul class="menu-list">
      <li>
        <label for="search"></label>
        <input id="search" name="q" type="text" placeholder="Mots clés" />
      </li>
      <li>
        <router-link class="hyperlink-decoration" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="hyperlink-decoration" to="/">Playlists</router-link>
      </li>
      <li>
        Michelle
      </li>
      <li>
        <!--TODO : A completer-->
        <router-link to="/settings">
          <img src="../images/user-cog-solid.svg" alt="user settings" />
        </router-link>
      </li>
      <li>
        <!--TODO : A completer-->
        <router-link to="/">
          <img src="../images/sign-out-alt-solid.svg" alt="log out" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>

/*.menu,*/
/*.menu-list{*/
/*  display: flex;*/
/*  flex-direction: row;*/
/*  justify-content: space-around;*/
/*  align-items: center;*/
/*  width: 100%;*/
/*}*/

.menu-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: whitesmoke;
  border: black;
  border-radius: 2px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.menu-list > li {
  display: block;
  text-align: center;
  padding: 14px 16px;
}

.menu-list > li > a {
  color: black;
  text-decoration: none;
}

.menu-list > li > a > img {
  height: 22px;
  width: 22px;
}

#search{
  width: 150px;
}
</style>
