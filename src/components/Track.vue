<template>
  <div class="track">
    <img v-bind:src="icon" alt="No icon available" />
    <span>{{ track.trackName }}</span>
    <span>{{ track.artistName }}</span>
    <span>{{ length }}</span>
    <button class="delete" v-on:click="deleteTrack(track.trackId)">
      Delete track
    </button>
  </div>
</template>

<script>
import { millisecondsToTrackLength } from "../scripts/helper";

export default {
  name: "Track",
  props: ["track", "deleteTrack"],

  computed: {
    icon: function() {
      return this.track.artworkUrl30;
    },
    length: function() {
      return millisecondsToTrackLength(this.track.trackTimeMillis);
    }
  }
};
</script>

<style scoped>
.track {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
}
</style>
