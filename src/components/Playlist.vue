<template>
  <div class="playlist">
    <div>{{ playlist.name }}</div>
    <input
      v-model="newPlaylistName"
      placeholder="Write the new name of your playlist"
    />
    <button
      class="rename"
      v-if="newPlaylistName !== ''"
      v-on:click="renamePlaylist()"
    >
      Rename playlist
    </button>
    <button class="add_track" v-on:click="addTrack()">Add track</button>
    <button class="delete" v-on:click="deletePlaylist(playlist.id)">
      Delete playlist
    </button>
    <div class="track">
      <Track
        v-for="track in playlist.tracks"
        v-bind:track="track"
        v-bind:key="track.id"
        v-bind:deleteTrack="deleteTrack"
      />
    </div>
  </div>
</template>

<script>
import * as api from "../scripts/api";
import Track from "./Track";

const trackLivrable2 = {
  artistId: 669771,
  trackId: 302053341,
  artistName: "Rick Astley",
  trackName: "Never Gonna Give You Up",
  artworkUrl30:
    "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/66/0e/48/660e4885-4aaa-f5cc-7e86-e483ca5ac99e/source/30x30bb.jpg",
  trackTimeMillis: 212827
};

export default {
  name: "Playlist",
  components: {
    Track
  },

  props: ["playlist", "deletePlaylist"],

  data: () => ({
    newPlaylistName: "",
    tracks: []
  }),

  methods: {
    async renamePlaylist() {
      try {
        this.playlist.name = this.newPlaylistName;
        const { id, name } = this.playlist;
        await api.renamePlaylist(name, id);
        this.newPlaylistName = "";
      } catch (err) {
        console.log(err);
      }
    },
    async addTrack(track) {
      track = trackLivrable2;
      try {
        await api.addTrack(track, this.playlist.id);
        this.playlist.tracks.push(track);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteTrack(trackId) {
      try {
        await api.deleteTrack(trackId, this.playlist.id);
        let index = this.playlist.tracks.findIndex(
          track => track.id === trackId
        );
        this.playlist.tracks.splice(index, 1);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
