<template>
  <div>
    <div class="artist-name bordered">
      <h1>Michael Jackson</h1>
      <itunes-icon
        href="https://music.apple.com/fr/artist/michael-jackson/32940"
      />
    </div>
    <div class="artist-genre bordered">
      <h2>Pop</h2>
    </div>
    <div class="albums bordered">
      <h2>Albums</h2>
      <div>
        <ul class="album-list">
          <li>
            <router-link to="/album">
              <img
                class="album-cover"
                src="https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png"
                alt="Bad album cover"
              />
              <h3 class="album-title">
                Bad
              </h3>
            </router-link>
          </li>
          <li>
            <router-link to="/artist">
              <img
                class="album-cover"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Michael_Jackson_-_Thriller.png/220px-Michael_Jackson_-_Thriller.png"
                alt="Thriller album cover"
              />
              <h3 class="album-title">
                Thriller
              </h3>
            </router-link>
          </li>
          <li>
            <router-link to="/artist">
              <img
                class="album-cover"
                src="https://upload.wikimedia.org/wikipedia/en/f/f6/Off_the_wall.jpg"
                alt="Off the wall album cover"
              />
              <h3 class="album-title">
                Off the wall
              </h3>
            </router-link>
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

<style>
.bordered {
  margin-top: 5px;
  padding: 5px;
  border: 1px solid darkblue;
  border-radius: 0.5rem;
}

.artist-name,
.artist-genre {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.albums {
  text-align: center;
}
.album-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  padding: 0;
}

.album-list > li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}

.album-list > li > a {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: black;
  text-align: center;
  text-decoration: none;
}

.album-title {
  margin-top: 15px;
  margin-bottom: 0;
}

.album-cover {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  position: relative;
}
</style>
