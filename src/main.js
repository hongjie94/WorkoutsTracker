import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import firebase from 'firebase'
import './components/firebaseInit'
import axios from 'axios'

import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'
import VueGraph from 'vue-graph'

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(VueGraph)
Vue.use(Vuetify)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(user => {
  console.log('user', user)
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
