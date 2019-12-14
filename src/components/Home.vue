<template>
  <div>
    <div class="main-title bordered">
      <h1>Welcome!</h1>
    </div>
    <div class="title bordered">
      <h2>Your artists :</h2>
      <ul>
        <li>
          <router-link class="hyperlink-decoration" :to="{ name: 'Artist', params: { artistId: 32940 } }">
            Michael Jackson
          </router-link>
        </li>
        <li>
          <router-link class="hyperlink-decoration" :to="{ name: 'Artist', params: { artistId: 2820865 } }">
            The Offspring
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>