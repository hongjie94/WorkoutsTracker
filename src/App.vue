<template>
  <div id="app">
    <MyNav/>
      <div>
        <transition  appear enter-active-class="animated fadeInDown customDelay" leave-active-class="animated fadeOut">
          <router-view/>
        </transition>
      </div>
    <MyFooter/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import firebase from 'firebase/app'
import MyFooter from '@/components/footer.vue'
import MyNav from '@/components/nav.vue'
export default {
  components: { MyFooter, MyNav },
  name: 'App',
  computed: {
    ...mapActions([
      'getUserData'
    ]),
    ...mapState([
      'unlockedWorkouts'
    ])
  },
  async mounted () {
    // Get user id form firbase
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        this.$store.dispatch('getUserData', uid)
      }
    })
  }
}
</script>

<style scoped>
.customDelay {
  animation-delay: .5s;
  animation-duration: 2000ms;
}
</style>
