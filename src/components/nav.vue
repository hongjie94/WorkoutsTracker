<template>
  <nav class="navbar">
    <router-link to= "/" class="navbar__logo">
      <img src="../assets/sass/img/logo.png" alt="">
    </router-link>
    <div class="navbar__toggle" id="mobile-menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div class="navbar__menu">
      <div class="nav_center">
      <router-link class="navbar__link c" to= "/"> Home </router-link>
      <router-link class="navbar__link c" to= "/workout"> Workouts </router-link>
      <router-link class="navbar__link c" to= "/shop"> Shop </router-link>
      </div>
      <div class="nav_right">
      <transition  appear enter-active-class="animated rubberBand pd">
      <router-link v-if="loggedIn" to= "/dashbroad" class="navbar__link d" v-b-tooltip.hover title="Click here for Dashbroad">
      <span><i class="fas fa-user"></i> &nbsp; {{currentUser}}</span>
      </router-link>
      </transition>
      <router-link v-if="!loggedIn" to= "/login" class="navbar__link"> <i class="fas fa-user"></i> </router-link>
      <router-link to= "/cart" class="navbar__link">  <i class="fas fa-shopping-cart">
        <span class="num-cart-product">0</span></i>
      </router-link>
      <a class="navbar__link d sign_out" @click="signOut" v-show="loggedIn"> <span>Sign Out</span></a>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import '@firebase/auth'
export default {
  data () {
    return {
      loggedIn: false,
      currentUser: ''
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
        this.currentUser = firebase.auth().currentUser.email
      } else {
        this.loggedIn = false
        this.DashShow = false
      }
    })
  },
  methods: {
    async signOut () {
      try {
        const data = await firebase.auth().signOut()
        console.log(data)
        this.$router.replace({ name: 'Login' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
