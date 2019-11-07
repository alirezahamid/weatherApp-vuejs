import Vue from 'vue';
import Vuex from 'vuex';
import plugins from '../../plugins/plugins';
Vue.use(Vuex);
const store = new Vuex.Store({
    strict: true,
    state: {
        // loc: JSON.parse(window.localStorage.getItem('location'))
        city: JSON.parse(window.localStorage.getItem('location'))
    },
    mutations: {
        updateCity(state, city) {
            state.city = city
        }

    },
    plugins
})
export default store