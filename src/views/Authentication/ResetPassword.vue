<template>
  <div class="forgotpass_auth">
    <transition appear enter-active-class="animated bounceInDown delay">
      <div class="auth_form"  @submit.prevent= "resetPassword">
        <ul class="tab-group">
          <li class="tab"><router-link to= "/login"> Log In </router-link></li>
          <li class="tab"><router-link to= "/register"> Sign Up </router-link></li>
        </ul>
        <div id="resetPassword">
          <transition appear enter-active-class="animated flipInX head_delay">
            <h1 v-if="!send && !error">Forgot your password?</h1>
          </transition> <!-- header animation-->
          <transition enter-active-class="animated headShake">
            <div v-if="error && !send"><h4>{{error}}</h4></div>
          </transition> <!-- Error animation-->
          <transition enter-active-class="animated rubberBand">
             <div v-if="send"><h4 class="send" >{{send}}</h4></div>
          </transition> <!-- Send animation-->
          <form action="/" method="post">
            <div class="field-wrap">
              <input class="auth_input" type="email" v-model="email" placeholder="Email Address" required />
            </div>
            <button type="submit" class="auth_button button-block">Send email</button>
          </form>
        </div> <!-- resetPassword -->
      </div> <!-- auth_form -->
    </transition>  <!-- auth_form_box animation-->
  </div>
</template>

<script>
import firebase from 'firebase'
import '@firebase/auth'
export default {
  data () {
    return {
      email: '',
      error: '',
      show: true,
      send: ''
    }
  },
  methods: {
    resetPassword () {
      firebase.auth().sendPasswordResetEmail(this.email)
        .then(() => {
          this.send = 'We’ve sent a link to reset your password.'
        })
        .catch((error) => {
          this.show = false
          // var errorCode = error.code
          var errorMessage = error.message
          this.error = errorMessage
          // console.log(errorCode)
          // console.log(errorMessage)
          // // ..
        })
    }
  }
}
</script>

<style>
</style>
