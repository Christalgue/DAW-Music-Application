<template>
  <div>
    <h1>Bad</h1>
    <router-link to="/artist">
      <h2>Michael Jackson</h2>
    </router-link>
    <itunes-icon href="https://music.apple.com/fr/album/bad/559334659" />
    <div>
      <ul class="info-album-list">
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Michael_Jackson_-_Bad.png" alt="Bad album cover">
        </li>
        <li>
          Released on August the 31st of 1987
        </li>
        <li>
          11 tracks
        </li>
        <li>
          Pop
        </li>
        <li>
          <ol class="songs-list">
            <li>
              <p class="song-title">Bad</p>
              <p class="song-duration">4:07</p>
              <play-button/>
            </li>
            <li>
              <p class="song-title">The Way You Make Me Feel</p>
              <p class="song-duration">4:58</p>
              <play-button/>
            </li>
            <li>
              <p class="song-title">Speed Demon</p>
              <p class="song-duration">4:02</p>
              <play-button/>
            </li>
            <li>
              ...
            </li>
          </ol>
        </li>
      </ul>
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
  }
};
</script>

<style>
.songs-list > li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.info-album-list > li {
  list-style-type: none;
}
</style>
