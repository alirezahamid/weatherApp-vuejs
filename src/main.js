Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './services/routes/routes'
import store from './services/store/store';
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})



new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')