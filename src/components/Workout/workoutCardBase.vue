<template>
  <div id="category-workout">
    <div v-if="noResult" class="noResult">
        <h1>No results found</h1>
        <p> Your search - {{select}} - did not match any documents.</p>
      </div>
      <div :key="workout.index" v-for="workout in workouts"  class="card_div">
        <v-card class="card_theme">
           <v-img :src="workout.imageURL" alt="NotFund" />
          <v-card-title>
          {{workout.name}}
          </v-card-title>
          <v-card-subtitle class="price_div">
            <span class="price">$ {{workout.price}}</span>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                text
                @click="unlockClicked(workout.name, workout.imageURL, workout.price, workout.price_id)">
                 <!-- @click="overlay = !overlay"> -->
                <span>Unlock</span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon  @click="toggle(workout.id)" >
                <v-icon>{{ isActive === workout.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
          <v-expand-transition>
            <div v-show="isActive === workout.id">
              <v-divider></v-divider>
              <v-card-text style="text-align: initial;">
                <b>Includes:</b>
                <li :key='include.index' v-for="include in workout.includes">{{include}}</li>
                <hr style="background-color: white">
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
          <transition appear enter-active-class="animated bounceInDown delay">
          <div>
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
                :price = "unlock.price"
                :workoutName = "unlock.name"
              />
              </div>
              <div class="card_image">
                <img src="../PayMethods/cardImg/visa.png" width="50" class="mx-2">
                <img src="../PayMethods/cardImg/mc.svg" width="50" class="mx-2">
                <img src="../PayMethods/cardImg/ae.png" width="50" class="mx-2">
                <img src="../PayMethods/cardImg/discover.png" width="50" class="mx-2">
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
import 'firebase/auth'
import StripeCheckout from '@/components/PayMethods/stripeCheckout.vue'
import PayPalCheckout from '@/components/PayMethods/paypalCheckout.vue'
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
      error: ''
    }
  },
  methods: {
    async unlockLogin () {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace({ name: 'Workout' })
      } catch (error) {
        this.error = error.message
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
