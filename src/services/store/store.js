/*  eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import plugins from "../../plugins/plugins";
import Axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  strict: true,
  state: {
    city: JSON.parse(window.localStorage.getItem("location") || " "),
    currentWeatherData: [],
    dailyWeatherData: []
  },
  getters: {
    getIcon(state) {
      let icon = state.currentWeatherData[0].weather.icon;
      return "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
    }
  },

  mutations: {
    updateCity(state, city) {
      state.city = city;
    },

    setCurrentWeatherData(state, currentWeatherData) {
      state.currentWeatherData = currentWeatherData;
    },
    setDailyWeatherData(state, dailyWeatherData) {
      state.dailyWeatherData = dailyWeatherData;
    }
  },
  actions: {
    getCurrentWeatherData({ commit }) {
      let url = "https://api.weatherbit.io/v2.0/current",
        key = "key=d278d8fd45ac4a779a5949bd6ee4f37e";
      Axios.get(url + "?" + key + "&" + "city=" + this.state.city)
        .then(res => {
          commit("setCurrentWeatherData", res.data.data);
        })
        .catch(err => {
          return err;
        });
    },
    getDailyWeatherData({ commit }) {
      let url = "https://api.weatherbit.io/v2.0/forecast/daily",
        key = "key=d278d8fd45ac4a779a5949bd6ee4f37e",
        days = "days=" + 3;
      Axios.get(url + "?" + key + "&" + days + "&" + "city=" + this.state.city)
        .then(res => {
          commit("setDailyWeatherData", res.data.data);
        })
        .catch(err => {
          return err;
        });
    }
  },
  plugins
});
export default store;
