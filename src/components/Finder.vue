<template>
  <v-container fluid class="cyan lighten-5" style="height: 100%;">
    <v-layout wrap>
      <v-row>
        <v-col md="12">
          <!-- <h2 class="text-center" style="color:#0277BD">Enter Your City...</h2> -->
          <v-card class="mx-auto" max-width="550">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Weather</div>
                <v-list-item-title class="headline mb-1">
                  Find your City
                  <i class="baseline-location_city"></i>
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                <v-text-field class="mt-5" label="Find your City" clearable outlined dense></v-text-field>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn depressed>Finde</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "finder"
};
</script>
