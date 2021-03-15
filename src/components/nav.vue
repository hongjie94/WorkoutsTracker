<template>
  <nav class="navbar ">
    <router-link to= "/" class="navbar__logo">
      <img src="../assets/sass/img/logo.png" alt="">
    </router-link>
    <div class="mobile_icon">
    <router-link  v-show="!loggedIn" to= "/login">
      <i v-b-tooltip.hover title="User is not logged in" class="fas fa-user mobile_notlogin"></i>
    </router-link>
    <i v-b-tooltip.hover :title="'Logged in as ' + currentUser" class="fas fa-user mobile_login" v-show="loggedIn"></i>
    </div>
    <div class="navbar__toggle" :class="{isactive: active}" @click="active = !active" id="mobile-menu" >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div>
    </div>
    <div class="navbar__menu hide"  :class="{active: active, show: active  }">
      <div class="nav_center" @click="active = !active">
        <router-link class="navbar__link c" to= "/"> Home </router-link>
        <router-link class="navbar__link c" to= "/workout"> Workouts </router-link>
        <router-link class="navbar__link c" to= "/shop"> Shop </router-link>
        <router-link class="navbar__link c" v-if="loggedIn"  to= "/dashbroad" > Dashbroad </router-link>
        <router-link to= "/cart" class="navbar__link cart"> <i class="fas fa-shopping-cart">
          <span class="num-cart-product">0</span></i>
        </router-link>
        <a class="navbar__link d sign_out mobile_logout " @click="signOut" v-show="loggedIn"> <span>Sign Out</span></a>
      </div>
      <div class="nav_right">
      <transition  appear enter-active-class="animated rubberBand pd">
          <span class="user" v-b-tooltip.hover :title="' welcome back '+currentUser" v-if="loggedIn"><i class="fas fa-user"></i> {{currentUser}}</span>
      </transition>
      <router-link  v-if="!loggedIn" to= "/login" class="navbar__link"> <span @click="active = !active" >Log In</span> </router-link>
      <div class="nav_end" @click="closeNav()">
        <router-link  v-if="!loggedIn" to= "/register" class="navbar__link"> <span @click="active = !active" >Sign Up</span> </router-link>
        <a class="navbar__link d sign_out" @click="signOut" v-show="loggedIn"> <span>Sign Out</span></a>
      </div>
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
      currentUser: '',
      active: false
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
        const authUserEmail = firebase.auth().currentUser.email
        const capitalizedEmail = authUserEmail.charAt(0).toUpperCase() + authUserEmail.slice(1)
        this.currentUser = capitalizedEmail
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
    },
    closeNav () {
      this.active = false
    }
  }
}
</script>
<style>
</style>
