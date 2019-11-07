/*  eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import plugins from '../../plugins/plugins';
import Axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
    strict: true,
    state: {
        city: JSON.parse(window.localStorage.getItem('location')),
        weatherData: []
    },
    getters: {
        roundTemp(state) {
            return Math.round(state.weatherData.main.temp)

        },
        getIcon(state) {
            let icon = state.weatherData.weather[0].icon
            return "https://openweathermap.org/img/w/" + icon + ".png"
        },
        roundSpeed(state) {
            return Math.round(state.weatherData.wind.speed)
        }
    },
    mutations: {
        updateCity(state, city) {
            state.city = city
        },
        setWeatherData(state, weatherData) {
            state.weatherData = weatherData
        }
    },
    actions: {
        getWeatherData({
            commit
        }) {
            Axios.get(
                    "https://api.openweathermap.org/data/2.5/weather?q=" +
                    this.state.city +
                    "&units=metric&appid=18ecff4f01cc4ec14938b160ebe1c11d"
                )
                .then((res) => {
                    commit('setWeatherData', res.data)
                })
                .catch((err) => {
                    return err
                })

        }
    },
    plugins
})
export default store