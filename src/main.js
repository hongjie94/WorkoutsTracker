import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify'
import firebase from 'firebase/app'
import axios from 'axios'
import VueGraph from 'vue-graph'
import './components/firebaseInit'
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(VueGraph)
Vue.use(Vuetify)
Vue.use(require('vue-script2'))

Vue.prototype.$axios = axios
Vue.config.productionTip = false

export const bus = new Vue()

let app

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      user,
      render: h => h(App)
    }).$mount('#app')
  }
})
