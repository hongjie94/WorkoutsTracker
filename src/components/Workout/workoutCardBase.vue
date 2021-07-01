<template>
  <div id="category-workout">
    <div v-if="noResult" class="noResult">
        <h1>No results found</h1>
        <p> Your search - {{select}} - did not match any documents.</p>
      </div>
      <div :key="workout.id" v-for="workout in workouts"
      class="card_div"
      @mouseleave="hideUnlockSection"
      >
        <v-card class="card_theme">
          <v-img :src="workout.imageURL"
          :class="{ opacity: unlockSection === workout.name }"
          @mouseenter="showUnlockSection(workout.name)"
          alt="NotFund" />
            <div class="workoutsTitle">
              <p>{{workout.name}}</p>
              <span class="price">$ {{workout.price}}</span>
            </div>
           <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown">
          <div class="unlock-section"
          @mouseover="showUnlockSection(workout.name)"
          v-if="unlockSection === workout.name">
             <v-card-title>
          <span>{{workout.name}}</span>
          </v-card-title>
          <v-card-subtitle class="price_div">
            <span class="details">
              <li :key='include.index' v-for="include in workout.includes">{{include}}</li>
            </span>
          </v-card-subtitle>
            <v-card-actions>
              <v-btn
                text
                :disabled ='isUnlock(workout.name)'
                :class="{ btn_unlocked: isUnlock(workout.name) }"
                @click="unlockClicked(workout.name, workout.strogeURL, workout.price, workout.price_id)">
                <i style="font-size: 2em" v-if="isUnlock(workout.name)" class="mdi mdi-lock-open-variant" aria-hidden="true"></i>
                <span v-if="!isUnlock(workout.name)"> Unlock</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon
              :class="{ btn_unlocked:isUnlock(workout.name)}"
              @click="toggle(workout.id)" >
                <v-icon>{{ isActive === workout.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
           </transition>
          <v-expand-transition>
            <div v-show="isActive === workout.id">
              <v-card-text style="text-align: initial;">
                <b :key='equipment.index' v-for="equipment in workout.equipments">{{equipment}}</b>
                <li :key='require.index' v-for="require in workout.required">{{require}}</li>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
      <v-row justify="center">
        <v-overlay
          style="z-index: 99"
          :value="overlay">
          <transition appear enter-active-class="animated fadeInDown">
          <div class="overlay">
            <div class="closeUnlockBtn_div">
              <div class="closeUnlockBtn" @click="unlockClicked">
                <div><i class="mdi mdi-close"></i></div>
              </div>
            </div>
            <v-card class="unlock_vCard">
              <div class="unlockPayment" v-if="loggedIn">
                <div class="unlockDetail">
                  <v-img class="unlock_img" :src="unlock.image" />
                  <h5> {{unlock.name}}</h5>
                  <h6>Total: ${{unlock.price}}</h6>
                </div>
                <div class="paymentBtn_div">
                <StripeCheckout
                  :price_id ="unlock.priceId"
                  :workoutName = "unlock.name"
                />
                <PayPalCheckout
                  :price_id ="unlock.priceId"
                  :price = "unlock.price"
                  :workoutName = "unlock.name"
                  :unlockImage = "unlock.image"
                />
                </div>
                <div class="card_image">
                  <img src="../PayMethods/cardImg/visa.png"  class="mx-2">
                  <img src="../PayMethods/cardImg/mc.svg"  class="mx-2">
                  <img src="../PayMethods/cardImg/ae.png"  class="mx-2">
                  <img src="../PayMethods/cardImg/discover.png" class="mx-2">
                </div>
              </div>
              <div class="notLogin" v-if="!loggedIn"> <!-- If user is not login -->
                <transition appear enter-active-class="animated flipInX head_delay">
                  <h4 v-if="!error" class="notLogin_text">{{loginRequired}}</h4>
                  </transition>
                  <transition enter-active-class="animated headShake">
                    <div v-if="error" class="error"><h4>{{error}}</h4></div>
                  </transition>
                <div class="content">
                    <div id="login">
                    <form action="/" method="post" @submit.prevent= "unlockLogin">
                    <div class="field-wrap">
                    <input class="auth_input" type="email" v-model="email" autocomplete="on" placeholder="Email Address" />
                    </div>
                    <div class="field-wrap">
                    <input class="auth_input" type="password" placeholder="Password" autocomplete="on" v-model="password" >
                    </div>
                    <p class="forgot"><router-link to= "/resetPassword"> Forgot Password?</router-link></p>
                    <button type="submit" class="unlock_auth_button button-block">Log In</button>
                    </form>
                    </div>
                    <p>Don't have an account?
                      <router-link to= "/register"> Register</router-link>
                      here
                    </p>
                </div>
              </div>
            </v-card>
          </div>
          </transition>
        </v-overlay>
      </v-row>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import StripeCheckout from '@/components/PayMethods/stripeCheckout.vue'
import PayPalCheckout from '@/components/PayMethods/paypalCheckout.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: { StripeCheckout, PayPalCheckout },
  props: {
    show: Boolean,
    isActive: Number,
    loading: Boolean,
    absolute: Boolean,
    opacity: Number,
    overlay: Boolean,
    workouts: Array,
    unlock: Array,
    noResult: Boolean,
    select: String,
    unlockClicked: Function,
    toggle: Function
  },
  data () {
    return {
      loggedIn: false,
      loginRequired: 'Please log in before continuing to unlock your workout.',
      email: '',
      password: '',
      error: '',
      unlockSection: '',
      workoutName: ''
    }
  },
  computed: {
    ...mapState([
      'unlockedWorkouts',
      'uid'
    ]),
    ...mapGetters([
      'UnlockedWorkoutName'
    ])
  },
  methods: {
    async unlockLogin () {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace({ name: 'Workout' })
      } catch (error) {
        this.error = error.message
      }
    },
    showUnlockSection (workoutName) {
      this.workoutName = workoutName
      this.unlockSection = workoutName
    },
    hideUnlockSection () {
      this.unlockSection = ''
    },
    isUnlock (workoutName) {
      if (this.UnlockedWorkoutName) {
        return (this.UnlockedWorkoutName.includes(workoutName))
      } else {
        // console.log('No data available')
        return false
      }
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    })
  }
}
</script>
