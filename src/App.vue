<template>
  <v-app>
    <v-app-bar app color="cyan" dark>
      <div class="d-flex align-center">
        <v-icon large class="mr-1">{{weather}}</v-icon>
        <h1>Weather App</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://gitlab.com/noghol/tutorials/weather" target="_blank" text>
        <span class="mr-2 font-weight-bold">GitLab</span>
        <v-icon>{{gitlab}}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content></v-content>
  </v-app>
</template>

<script>
import { mdiGitlab, mdiWeatherCloudy } from "@mdi/js";
export default {
  name: "App",

  components: {},

  data: () => ({
    gitlab: mdiGitlab,
    weather: mdiWeatherCloudy
  })
};
</script>
