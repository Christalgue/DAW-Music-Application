<template>
  <div>
    <h1>{{ user.name }}</h1>
    <div>{{ user.email }}</div>
    <div>My playlists:</div>
    <ul>
      <li v-for="playlist in user.playlists" v-bind:key="playlist.id">
        {{ playlist.name }}
      </li>
    </ul>
    <button>Follow/Unfollow</button>
    <div>My friendlist:</div>
    <ul>
      <li v-for="followed in user.following" v-bind:key="followed.id">
        {{ followed.name }}
      </li>
    </ul>
  </div>
</template>

<style></style>

<script>
import * as api from "../scripts/api";
import Cookies from "js-cookie";
// const USER_ID = "5dcb4515df32280004e1de74";
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

  methods: {
    getUserId(allUsers, email) {
      let id = "";
      allUsers.forEach(user => {
        if (user.email === email) {
          id = user.id;
          return "";
        }
      });
      return id;
    }
  },

  async created() {
    let email = Cookies.get("email");
    let id = this.getUserId(await api.getAllUsers(), email);
    let userInfo = await api.getUser(id);
    this.user.email = userInfo.email;
    this.user.name = userInfo.name;
    this.user.following = userInfo.following;
    this.user.playlists = await api.getPlaylists(email);
  }
};
</script>
