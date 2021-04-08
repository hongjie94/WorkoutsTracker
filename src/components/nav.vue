<template>
  <nav class="navbar" ref="elHtml">
    <a to= "/" class="navbar__logo">
      <img src="../assets/sass/img/logo.png" alt="">
    </a>
     <!-- mobile size nav menu -->
    <div class="mobile_icon">
      <router-link  v-show="!loggedIn" to= "/login" exact>
        <i v-b-tooltip.hover title="User is not logged in" @click="closeNav" class="fas fa-user mobile_notlogin"></i>
      </router-link>
      <i v-b-tooltip.hover :title="'Logged in as ' + currentUser" class="fas fa-user mobile_login" v-show="loggedIn"></i>
    </div>
    <div class="navbar__toggle" :class="{isactive: active }" @click="actvieToggle" id="mobile-menu" >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <!-- Nav menu -->
    <div class="navbar__menu hide" :class="{active: active, show: active}">
      <div class="nav_center" @click="overflowYAuto">
        <router-link class="navbar__link c" to= "/" exact> Home </router-link>
        <router-link class="navbar__link c" to= "/workout" exact> Workout</router-link>
        <router-link class="navbar__link c" to= "/shop" exact> Shop </router-link>
        <router-link class="navbar__link c" v-if="loggedIn"  to= "/dashbroad" exact> Dashbroad </router-link>
        <router-link to= "/cart" exact class="navbar__link cart"> <i class="fas fa-shopping-cart">
          <span class="num-cart-product">52</span></i>
        </router-link>
        <a class="navbar__link mobile_logout" @click="signOut" v-if="loggedIn"> <span>Sign Out</span></a>
      </div>
      <div class="nav_right">
        <transition  appear enter-active-class="animated rubberBand pd">
            <span class="user"
              v-b-tooltip.hover
              :title="'Logged in as '+ currentUser"
              v-if="loggedIn">
              <i class="fas fa-user"></i>
              {{userFN}} , {{userLN}}
            </span>
        </transition>
        <div class="login_div">
          <router-link  v-if="!loggedIn" to= "/login" exact class="navbar__link"> <span @click="active = !active" >Log In</span> </router-link>
        </div>
        <div class="nav_end" @click="closeNav">
          <router-link  v-if="!loggedIn" to= "/register" exact class="navbar__link"> <span @click="active = !active" >Sign Up</span> </router-link>
          <a class="navbar__link d sign_out" @click="signOut" v-show="loggedIn"> <span>Sign Out</span></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      loggedIn: false,
      currentUser: '',
      active: false,
      emailVerified: '',
      uid: '',
      userLN: '',
      userFN: ''
    }
  },
  async created () {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.uid = user.uid
        this.loggedIn = true
        this.currentUser = firebase.auth().currentUser.email
        this.emailVerified = firebase.auth().currentUser.emailVerified
      } else {
        this.loggedIn = false
        this.DashShow = false
      }
    })
    if (this.uid) {
      db.collection(this.uid).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          // console.log(doc.data())
          this.userLN = doc.data().lastName
          this.userFN = doc.data().firstName
        })
      })
    }
  },
  methods: {
    async signOut () {
      try {
        await firebase.auth().signOut()
        this.$router.replace({ name: 'Login' })
      } catch (error) {
        console.log('error ' + error)
      }
    },
    overflowYAuto () {
      this.active = !this.active
      this.$refs.elHtml.ownerDocument.documentElement.style.cssText = 'overflow-y: auto;'
    },
    closeNav () {
      this.$refs.elHtml.ownerDocument.documentElement.style.cssText = 'overflow-y: auto;'
      this.active = false
    },
    actvieToggle () {
      this.active = !this.active
      if (this.active) {
        this.$refs.elHtml.ownerDocument.documentElement.style.cssText = 'overflow-y: hidden;'
      } else if (!this.active) {
        this.$refs.elHtml.ownerDocument.documentElement.style.cssText = 'overflow-y: auto;'
      }
    }
  }
}
</script>
