<template>
  <div>
    <h2>Result for: {{ search.terms }}</h2>
    <div>Number of results: {{ search.resultCount }}</div>
    <div> Artists: {{search.resultsArtist.length}} results</div>
    <ul id="artist-list">
      <li v-for="resultArtist in search.resultsArtist" :key="resultArtist.id">
        <router-link
          class="hyperlink-decoration"
          :to="{ name: resultArtist.routerName, params: { artistId: resultArtist.id } }"
        >
          {{ resultArtist.name }}
        </router-link>
      </li>
    </ul>
    <div> Albums: {{search.resultsAlbum.length}} results</div>
    <ul id="album-list">
      <li v-for="resultAlbum in search.resultsAlbum" :key="resultAlbum.id">
        <router-link
          class="hyperlink-decoration"
          :to="{ name: resultAlbum.routerName, params: { artistId: resultAlbum.id } }"
        >
          {{ resultAlbum.name }}
        </router-link>
      </li>
    </ul>
    <div> Track: {{search.resultsTrack.length}} results</div>
    <ul id="track-list">
      <li v-for="resultTrack in search.resultsTrack" :key="resultTrack.id">
        <span> {{ resultTrack.name }}</span>
        <plus-button
          v-on:click.native="addTrackToPlaylist(resultTrack.track)"
        />
      </li>
    </ul>
    <div> User: {{search.resultsUser.length}} results</div>
    <ul id="user-list">
      <li v-for="resultUser in search.resultsUser" :key="resultUser.id">
        <router-link
          class="hyperlink-decoration"
          :to="{ name: resultUser.routerName, params: { userId: resultUser.id } }"
        />
        <button>Follow</button>
      </li>
    </ul>
  </div>
</template>

<style></style>

<script>
import * as api from "../scripts/api";
import Cookies from "js-cookie";
import PlusButton from "./PlusButton";

export default {
  name: "Result",

  components: {
    PlusButton
  },
  comments: {
    "plus-button": PlusButton
  },
  // monitor changes in search terms and adjust accordingly
  watch: {
    $route(to, from) {
      this.search.resultsArtist = []; // clear search results
      this.search.resultsAlbum = []; // clear search results
      this.search.resultsTrack = []; // clear search results
      this.search.resultsUser = []; // clear search results
      this.loadData();
    }
  },

  methods: {
    async addTrackToPlaylist(track) {
      try {
        await api.addTrack(track, this.userLists[0].id);
      } catch (err) {
        console.log(err);
      }
    },

    async loadData() {
      if (document.getElementById("search") !== null) {
        this.search.terms = this.$route.query.terms;
      } else {
        this.search.terms = "";
      }
      let search = await api.getGlobalSearch(this.search.terms);
      this.search.resultCount = search.resultCount;
      this.formatData(search.results);
    },

    formatData(results) {
      results.forEach(result => {
        if (result.wrapperType === "artist") {
          this.search.resultsArtist.push({
            name: result.artistName,
            id: result.artistId,
            type: "artist",
            routerName: "Artist",
            routerParam: "artistId"
          });
        } else if (result.wrapperType === "collection") {
          this.search.resultsAlbum.push({
            name: result.collectionName,
            id: result.collectionId,
            type: "album",
            routerName: "Album",
            routerParam: "albumId"
          });
        } else if (result.wrapperType === "track") {
          this.search.resultsTrack.push({
            name: result.trackName,
            id: result.trackId,
            type: "track",
            routerName: "Track",
            track: result
          });
        } else if (result.wrapperType !== "audiobook") {
          this.search.resultsUser.push({
            name: result.name,
            id: result.userId,
            type: "user",
            routerName: "User",
            routerParam: "userId"
          });
        }
      });
    }
  },

  data: () => ({
    email: Cookies.get("email"),
    search: {
      terms: "",
      resultCount: "",
      resultsArtist: [],
      resultsAlbum: [],
      resultsTrack: [],
      resultsUser: []
    }
  }),

  async created() {
    this.userLists = await api.getPlaylists(this.email);
    this.loadData();
  },

};
</script>
