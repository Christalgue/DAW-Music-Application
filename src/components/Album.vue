<template>
  <div>
    <div class="main-title bordered">
      <h1>{{ album.artistName }}'s {{ album.title }}</h1>
      <itunes-icon v-bind:href="album.url" />
    </div>
    <div class="title bordered">
      <router-link class="hyperlink-decoration" to="/artist">
        <h2>{{  }}</h2>
      </router-link>
    </div>
    <div class="album-description bordered">
      <div class="info-album">
        <img
          class="album-cover"
          v-bind:src="album.image"
          alt="Album cover image"
        />
        <ul class="info-album-list">
          <li>
            {{ album.genre }}
          </li>
          <li>
            Released on {{ album.releaseDate }}
          </li>
          <li>
            {{ album.trackCount }} tracks
          </li>
        </ul>
      </div>
      <ol class="songs-list">
        <li v-for="track in album.tracks">
          <p class="song-number">{{ track.trackNumber }}</p>
          <p class="song-title">{{ track.trackName }}</p>
          <p class="song-duration">{{ track.length }}</p>
          <audio controls><source v-bind:src="track.previewUrl"></audio>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ItunesIcon from "./ItunesIcon";
import * as api from "../scripts/api";
import { millisecondsToTrackLength, getHumanReleaseDate } from "../scripts/helper";

export default {
  components: {
    "itunes-icon": ItunesIcon
  },
  data () {
    return {
      albumId: 0,
      album: {
        title: "",
        artistName: "",
        artistId: "",
        genre: "",
        releaseDate: "",
        trackCount: 0,
        tracks: [],
        url: "",
        image: ""
      }
    }
  },
  async created() {
    this.albumId = this.$route.params.albumId;
    let albumInfo = await api.getAlbum(this.albumId);

    this.album.artistName = albumInfo.artistName;
    this.album.title = albumInfo.collectionName;
    this.album.image = albumInfo.artworkUrl100;
    this.album.artistId = albumInfo.artistId;
    this.album.genre = albumInfo.primaryGenreName;
    this.album.trackCount = albumInfo.trackCount;
    this.album.releaseDate = getHumanReleaseDate(albumInfo.releaseDate);
    this.album.url = albumInfo.collectionViewUrl;
    this.album.tracks = await api.getAlbumTracks(this.albumId);

    // add mm:ss track length to the data
    for (var track of this.album.tracks) {
      track["length"] = millisecondsToTrackLength(track.trackTimeMillis)
    }
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
/* TODO: fix CSS for album image to get a decent size */
</style>
