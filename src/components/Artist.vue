<template>
  <div>
    <h1>Michael Jackson</h1>
    <itunes-icon href="https://music.apple.com/fr/artist/michael-jackson/32940" />
    <div>
      <h2>Genre</h2>
      <div>
        <p>
          Pop
        </p>
      </div>
      <h2>Albums</h2>
      <div>
        <ul>
          <li>
            <router-link to="/album">Bad</router-link>
          </li>
          <li>
            Thriller
          </li>
          <li>
            Off the wall
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ItunesIcon from "./ItunesIcon";

export default {
  components: {
    "itunes-icon": ItunesIcon
  }
};
</script>

<style></style>
