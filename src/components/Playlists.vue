<template>
  <div>
    <div class="main-title bordered">
      <h1>Playlists</h1>
    </div>
    <div class="bordered">
      <span class="playlist-title">Create a new playlist:</span>
      <input v-model="playlistInput" placeholder="Your new playlist's name" />
      <button
        class="create_playlist"
        v-if="playlistInput !== ''"
        v-on:click="createPlaylist"
      >
        Create new playlist
      </button>
    </div>
    <div class="playlists bordered">
      <Playlist
        v-for="playlist in userLists"
        v-bind:playlist="playlist"
        v-bind:key="playlist.id"
        v-bind:deletePlaylist="deletePlaylist"
      />
    </div>
  </div>
</template>

<script>
import * as api from "../scripts/api";
import Playlist from "./Playlist";
export default {
  name: "Playlists",
  components: {
    Playlist
  },

  data: () => ({
    playlistInput: "",
    userLists: []
  }),

  methods: {
    async createPlaylist() {
      try {
        const newPlaylist = await api.createPlaylist(this.playlistInput);
        this.userLists.push(newPlaylist);
        this.playlistInput = "";
      } catch (err) {
        console.log(err);
      }
    },

    async deletePlaylist(playlistId) {
      try {
        await api.deletePlaylist(playlistId);
        let index = this.userLists.findIndex(
          playlist => playlist.id === playlistId
        );
        this.userLists.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    this.userLists = await api.getPlaylists();
  }
};
</script>

<style>
.playlist-title {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
}
</style>
