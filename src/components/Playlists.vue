<template>
  <div>
    <h1>Playlists</h1>
    <input v-model="playlistInput" placeholder="Your new playlist's name" />
    <button
      class="create_playlist"
      v-if="playlistInput !== ''"
      v-on:click="createPlaylist"
    >
      Create new playlist
    </button>
    <div class="playlists">
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

<style></style>
