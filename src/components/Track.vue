<template>
  <div class="track">
    <img v-bind:src="icon" alt="No icon available" />
    <div>{{ track.trackName }}</div>
    <div>{{ track.artistName }}</div>
    <div>{{ millisToMinutesAndSeconds(track.trackTimeMillis) }}</div>
    <button class="delete" v-on:click="deleteTrack(track.trackId)">
      Delete track
    </button>
  </div>
</template>

<script>
export default {
  name: "Track",
  props: ["track", "deleteTrack"],

  computed: {
    icon: function() {
      return this.track.artworkUrl30;
    }
  },

  methods: {
    millisToMinutesAndSeconds(millis) {
      let min = Math.floor(millis / 60000);
      let sec = ((millis % 60000) / 1000).toFixed(0);
      return min + ":" + (sec < 10 ? "0" : "") + sec;
    }
  }
};
</script>

<style scoped></style>
