<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="cyan" dark>
        <div class="d-flex align-center">
          <v-icon large class="mr-1">mdi-weather-cloudy</v-icon>
          <h1>Weather App</h1>
        </div>
        <v-spacer></v-spacer>
        <v-btn href="https://gitlab.com/noghol/tutorials/weather" target="_blank" text>
          <span class="mr-2 font-weight-bold">GitLab</span>
          <v-icon>mdi-gitlab</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>

      <!-- Navigation -->
      <v-bottom-navigation color="white" background-color="cyan" dark>
        <v-btn to="/" value="Finder">
          <span>Finder</span>
          <v-icon>mdi-cloud-search-outline</v-icon>
        </v-btn>

        <v-btn to="/weather" value="Weather">
          <span>Weather</span>
          <v-icon>mdi-weather-pouring</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <!-- Footer -->
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-text class="py-2 white--text text-center cyan lighten-2">
            {{ new Date().getFullYear() }} —
            <strong>Weather App By Alireza</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
// import { mdiGitlab, mdiWeatherCloudy } from "@mdi/js";
// import Finder from "./components/Finder";
// import Weather from "./components/Weather";
export default {
  name: "App",

  data() {
    return {
      socialLinks: [
        {
          id: 1,
          icon: "mdi-instagram",
          href: "https://instagram.com/alirezahamidd"
        },
        {
          id: 2,
          icon: "mdi-gitlab",
          href: "https://gitlab.com/noghol/tutorials/weather"
        }
      ]
    };
  }
};
</script>
