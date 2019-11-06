Vue.config.productionTip = false

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './services/routes/routes'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})



new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')