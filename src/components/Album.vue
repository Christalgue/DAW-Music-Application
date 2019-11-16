<template>
  <div>
    <div class="main-title bordered">
      <h1>Bad</h1>
      <itunes-icon href="https://music.apple.com/fr/album/bad/559334659" />
    </div>
    <div class="title bordered">
      <router-link class="hyperlink-decoration" to="/artist">
        <h2>Michael Jackson</h2>
      </router-link>
    </div>
    <div class="album-description bordered">
      <div class="info-album">
        <img
          class="album-cover"
          src="https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png"
          alt="Bad album cover"
        />
        <ul class="info-album-list">
          <li>
            Pop
          </li>
          <li>
            Released on August the 31st of 1987
          </li>
          <li>
            11 tracks
          </li>
        </ul>
      </div>
      <ol class="songs-list">
        <li>
          <p class="song-number">1</p>
          <p class="song-title">Bad</p>
          <p class="song-duration">4:07</p>
          <play-button />
        </li>
        <li>
          <p class="song-number">2</p>
          <p class="song-title">The Way You Make Me Feel</p>
          <p class="song-duration">4:58</p>
          <play-button />
        </li>
        <li>
          <p class="song-number">3</p>
          <p class="song-title">Speed Demon</p>
          <p class="song-duration">4:02</p>
          <play-button />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ItunesIcon from "./ItunesIcon";
import PlayButton from "./PlayButton";

export default {
  components: {
    PlayButton,
    "itunes-icon": ItunesIcon
  },
  comments: {
    "play-button": PlayButton
  },
  data () {
    return {
      albumId: 0
    }
  },
  created() {
    this.albumId = this.$route.params.albumId;
  },
};
</script>

<style>
.info-album {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 0;
}

.info-album-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.songs-list > li {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 0;
}
</style>
