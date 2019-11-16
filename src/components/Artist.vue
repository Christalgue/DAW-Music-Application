<template>
  <div>
    <div class="main-title bordered">
      <h1>{{ artist.name }}</h1>
      <itunes-icon v-bind:href="artist.url" />
    </div>
    <div class="title bordered">
      <h2>{{ artist.genre }}</h2>
    </div>
    <div class="albums bordered">
      <h2>Albums</h2>
      <div>
        <ul class="album-list">
          <li v-for="album in albums">
            <router-link class="hyperlink-decoration" :to="{ name: 'Album', params: { albumId: album.collectionId } }">
              <img
                class="album-cover"
                v-bind:src="album.artworkUrl100"
                alt="Album cover image"
              />
              <h4 class="album-title">{{ album.collectionName }}</h4>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ItunesIcon from "./ItunesIcon";
import * as api from "../scripts/api";

const ARTIST_ID = "32940";  // TODO: move this elsewhere to make it more dynamic

export default {
  components: {
    ItunesIcon
  },
  data () {
    return {
      artist: {
        name: "",
        genre: "",
        url: ""
      },
      albums: []
    };
  },
  async created() {
      let artistInfo = await api.getArtist(ARTIST_ID);
      this.artist.name = artistInfo.artistName;
      this.artist.genre = artistInfo.primaryGenreName;
      this.artist.url = artistInfo.artistLinkUrl;

      this.albums = await api.getArtistAlbums(ARTIST_ID);
  }
}
</script>

<style>
.bordered {
  margin-top: 5px;
  padding: 5px;
  border: 1px solid darkblue;
  border-radius: 0.5rem;
}

.main-title,
.title {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-title {
  flex-direction: row;
}

.title {
  flex-direction: column;
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
  text-align: center;
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

.hyperlink-decoration {
  text-decoration: none;
  color: black;
}

.hyperlink-decoration:hover {
  text-decoration: underline;
}
</style>
