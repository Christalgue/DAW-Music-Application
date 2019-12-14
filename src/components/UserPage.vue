<template>
  <div>
    <h1>{{ user.name }}</h1>
    <div>{{ user.email }}</div>
    <div>My playlists:</div>
    <ul>
      <li v-for="playlist in user.playlists">
        {{ playlist.name }}
      </li>
    </ul>
    <button>Follow/Unfollow</button>
    <div>My friendlist:</div>
    <ul>
      <li v-for="followed in user.following">
        {{ followed.name }}
      </li>
    </ul>
  </div>
</template>

<style></style>

<script>
import * as api from "../scripts/api";

const USER_ID = "5dcb4515df32280004e1de74";
export default {
  name: "User",

  data: () => ({
    user: {
      email: "",
      name: "",
      playlists: [],
      following: []
    }
  }),

  methods: {},
  async created() {
    let userInfo = await api.getUser(USER_ID);
    this.user.email = userInfo.email;
    this.user.name = userInfo.name;
    this.user.following = userInfo.following;
    this.user.playlists = await api.getPlaylists();
  }
};
</script>
