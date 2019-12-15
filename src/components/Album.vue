<template>
  <div>
    <div class="main-title bordered">
      <plus-button v-on:click.native="addAlbumTracksToPlaylist" />
      <h1>{{ album.title }}</h1>
      <itunes-icon v-bind:href="album.url" />
    </div>
    <div class="title bordered">
      <router-link class="hyperlink-decoration" :to="{ name: 'Artist', params: { artistId: album.artistId } }">
        <h2>{{ album.artistName }}</h2>
      </router-link>
    </div>
    <div class="album-description bordered">
      <div class="info-album">
        <img
          class="album-cover-main"
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
          <p class="song-title">
            <plus-button v-on:click.native="addTrackToPlaylist(track)"/>
            {{ track.trackName }}
          </p>
          <p class="song-duration">{{ track.length }}</p>
          <audio controls><source v-bind:src="track.previewUrl" /></audio>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import ItunesIcon from "./ItunesIcon";
import PlusButton from "./PlusButton";
import * as api from "../scripts/api";
import Cookies from "js-cookie";
import { millisecondsToTrackLength, getHumanReleaseDate } from "../scripts/helper";


export default {
  components: {
    PlusButton,
    "itunes-icon": ItunesIcon
  },
  comments: {
    "plus-button": PlusButton
  },
  methods: {
    async addTrackToPlaylist(track) {
      try {
        await api.addTrack(track, this.userLists[0].id);
      } catch (err) {
        console.log(err);
      }
    },
    async addAlbumTracksToPlaylist() {
      try {
        for (var track of this.album.tracks) {  // could we use map with async?
          await api.addTrack(track, this.userLists[0].id);
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  data() {
    return {
      albumId: 0,
      album: {
        title: "",
        artistName: "",
        artistId: 0,
        genre: "",
        releaseDate: "",
        trackCount: 0,
        tracks: [],
        url: "",
        image: ""
      },
      email: Cookies.get("email"),
      userLists: []
    };
  },
  async created() {
    this.albumId = this.$route.params.albumId;
    this.userLists = await api.getPlaylists(this.email);

    try {
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

      for (var track of this.album.tracks) {  // add mm:ss track length to the data
        track["length"] = millisecondsToTrackLength(track.trackTimeMillis);
      }
    } catch (err) {
      console.log(err);
    }
  }
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

.album-cover-main {
  max-width: 40%;
  height: auto;
  margin-left: 75%;
  margin-right: auto;
}

</style>
