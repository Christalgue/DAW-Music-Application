import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Album from "@/components/Album";
import Artist from "@/components/Artist";
import Playlists from "@/components/Playlists";
import UserSettings from "@/components/UserSettings";
import UserPage from "@/components/UserPage";
import Results from "@/components/Results";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/artist/:artistId",
      name: "Artist",
      component: Artist
    },
    {
      path: "/album/:albumId",
      name: "Album",
      component: Album
    },
    {
      path: "/playlists",
      name: "playlists",
      component: Playlists
    },
    {
      path: "/settings",
      name: "Settings",
      component: UserSettings
    },
    {
      path: "/user",
      name: "User",
      component: UserPage
    },
    {
      path: "/result",
      name: "Result",
      component: Results
    }
  ]
});
