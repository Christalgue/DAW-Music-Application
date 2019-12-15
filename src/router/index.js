import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Auth from "@/components/Auth";
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
      // TODO: add requiresAuth for home?
    },
    {
      path: "/login",
      name: "Login",
      component: Auth
    },
    {
      path: "/artist/:artistId",
      name: "Artist",
      component: Artist,
      meta: { requiresAuth: true }
    },
    {
      path: "/album/:albumId",
      name: "Album",
      component: Album,
      meta: { requiresAuth: true }
    },
    {
      path: "/playlists",
      name: "playlists",
      component: Playlists,
      meta: { requiresAuth: true }
    },
    {
      path: "/settings",
      name: "Settings",
      component: UserSettings,
      meta: { requiresAuth: true }
    },
    {
      path: "/user",
      name: "User",
      component: UserPage
    },
    {
      path: "/result",
      name: "Result",
      component: Results,
      props: true
    }
  ]
});
