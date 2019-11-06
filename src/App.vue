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
        <finder></finder>
      </v-content>

      <!-- Footer -->
      <v-bottom-navigation color="white" background-color="cyan" dark>
        <v-btn value="favorites">
          <span>Finder</span>
          <v-icon>mdi-cloud-search-outline</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Weather</span>
          <v-icon>mdi-weather-pouring</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
  </div>
</template>

<script>
// import { mdiGitlab, mdiWeatherCloudy } from "@mdi/js";
import Finder from "./components/Finder";
export default {
  name: "App",

  components: { finder: Finder },

  data: () => ({})
};
</script>
