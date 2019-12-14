<template>
  <div :key="componentKey">
    <h2>Result for: {{ search.terms }}</h2>
    <div>Number of results: {{ search.resultCount }}</div>
    <ul>
      <li v-for="result in search.results" :key="result.id">
        <router-link
          v-if="result.routerName === 'Artist'"
          class="hyperlink-decoration"
          :to="{ name: result.routerName, params: { artistId: result.id } }"
        >
          {{ result.name }}
        </router-link>
        <router-link
          v-if="result.routerName === 'Album'"
          class="hyperlink-decoration"
          :to="{ name: result.routerName, params: { albumId: result.id } }"
        >
          {{ result.name }}
        </router-link>
        <span v-if="result.routerName === 'Track'">
          {{ result.name }}
        </span>
        <router-link
          v-if="result.routerName === 'User'"
          class="hyperlink-decoration"
          :to="{ name: result.routerName, params: { userId: result.id } }"
        >
          {{ result.name }}
        </router-link>
        <button v-if="result.routerName === 'User'">Follow</button>
        <plus-button
          v-if="result.routerName === 'Track'"
          v-on:click.native="addTrackToPlaylist(result.track)"
        />
      </li>
    </ul>
  </div>
</template>

<style></style>

<script>
import * as api from "../scripts/api";
import PlusButton from "./PlusButton";
const PLAYLIST_ID = "5dd835099aaacd0004ddeaed";

export default {
  name: "Result",

  components: {
    PlusButton
  },
  comments: {
    "plus-button": PlusButton
  },

  methods: {
    async addTrackToPlaylist(track) {
      try {
        await api.addTrack(track, PLAYLIST_ID);
      } catch (err) {
        console.log(err);
      }
    },

    async loadData() {
      if (document.getElementById("search") !== null) {
        this.search.terms = document.getElementById("search").value;
      } else {
        this.search.terms = "";
      }
      let search = await api.getGlobalSearch(this.search.terms);
      console.log(search);
      this.search.resultCount = search.resultCount;
      this.formatData(search.results);
    },

    forceRerender() {
      this.componentKey += 1;
    },

    formatData(results) {
      results.forEach(result => {
        if (result.wrapperType === "artist") {
          this.search.results.push({
            name: result.artistName,
            id: result.artistId,
            icon: "artist",
            routerName: "Artist",
            routerParam: "artistId"
          });
        } else if (result.wrapperType === "collection") {
          this.search.results.push({
            name: result.collectionName,
            id: result.collectionId,
            icon: "album",
            routerName: "Album",
            routerParam: "albumId"
          });
        } else if (result.wrapperType === "track") {
          this.search.results.push({
            name: result.trackName,
            id: result.trackId,
            icon: "track",
            routerName: "Track",
            track: result
          });
        } else if (result.wrapperType !== "audiobook") {
          this.search.results.push({
            name: result.name,
            id: result.userId,
            icon: "user",
            routerName: "User",
            routerParam: "userId"
          });
        }
      });
    }
  },

  data: () => ({
    search: {
      terms: "",
      resultCount: "",
      results: []
    },
    componentKey: 0
  }),

  async created() {
    this.loadData();
  }
};
</script>
