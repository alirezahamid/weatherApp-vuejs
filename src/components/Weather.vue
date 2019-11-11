<template>
  <v-container fluid class="cyan lighten-5" style="height: 100%;">
    <v-layout wrap>
      <v-row>
        <v-col md="12">
          <v-card class="mx-auto" color="#F9F9F9" max-width="400">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">{{currentWeatherData[0].city_name}}</v-list-item-title>
                <v-list-item-subtitle>{{currentWeatherData[0].ob_time}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6">{{Math.round(currentWeatherData[0].temp)}}&deg;C</v-col>
                <v-col cols="6">
                  <v-img :src="getIcon" alt="Sunny image" width="100"></v-img>
                </v-col>
              </v-row>
            </v-card-text>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-send</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle>{{parseInt(currentWeatherData[0].wind_spd * 3.6)}} km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cloud-download</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle>{{currentWeatherData[0].rh}}%</v-list-item-subtitle>
            </v-list-item>

            <!-- <v-slider v-model="time" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider> -->

            <v-list class="transparent">
              <v-list-item v-for="(day,index) in dailyWeatherData" :key="index">
                <v-list-item-title>{{ day.valid_date }}</v-list-item-title>

                <v-list-item-icon>
                  <v-img :src="getDailyIcon"></v-img>
                </v-list-item-icon>

                <v-list-item-subtitle class="text-right">{{Math.round(day.temp)}}&deg;C</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>

            <!-- <v-card-actions>
              <v-btn text>Full Report</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */

import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "weather",

  computed: {
    ...mapState(["currentWeatherData", "dailyWeatherData"]),
    // ...mapGetters(["roundTemp", "getIcon", "roundSpeed"])
    ...mapGetters(["getIcon", "getDailyIcon"])
  },
  methods: {},
  created() {
    this.$store.dispatch("getCurrentWeatherData");
    this.$store.dispatch("getDailyWeatherData");
  }
};
</script>
