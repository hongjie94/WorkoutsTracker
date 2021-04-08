<template>
  <div class="auth_register">
    <transition appear enter-active-class="animated bounceInDown delay">
      <div class="auth_form" @submit.prevent = "register">
        <ul class="tab-group">
          <li class="tab "><router-link to= "/login"> Log In </router-link></li>
          <li class="tab active"><router-link to= "/register"> Sign Up </router-link></li>
        </ul>
        <div id="signup">
          <transition enter-active-class="animated headShake">
            <div v-if="error" ><h4>{{error}}</h4></div>
          </transition>  <!-- Error animation-->
          <transition appear enter-active-class="animated flipInX head_delay">
            <h1 v-if="show">Sign Up for Free</h1>
          </transition> <!-- header animation-->
          <form action="/" method="post">
            <div class="top-row">
              <div class="field-wrap">
                <input  autocomplete="on" class="auth_input active highlight" type="text"  placeholder="First Name*" v-model="fristname" required />
              </div>
              <div class="field-wrap">
                <input  autocomplete="on" class="auth_input active highlight"  type="text" placeholder="Last Name*"  v-model="lastname" required />
              </div>
            </div>
            <div class="field-wrap">
              <input autocomplete="on" class="auth_input" type="email" placeholder="Email Address*" v-model="email" required />
            </div>
            <div class="field-wrap">
              <input autocomplete="on" class="auth_input" type="password" placeholder="Set A Password*" v-model="password" required />
            </div>
            <div class="field-wrap">
              <input autocomplete="on" class="auth_input" type="password"  placeholder="Confirmation Password*" v-model="conformation" required />
            </div>
            <button type="submit" class="auth_button button-block">Get Started</button>
          </form>
        </div> <!-- /signup -->
      </div> <!-- /auth_form -->
    </transition> <!-- auth_form_box animation-->
  </div>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data () {
    return {
      email: '',
      password: '',
      conformation: '',
      error: '',
      fristname: '',
      lastname: '',
      show: true
    }
  },
  methods: {
    register () {
      if (this.password !== this.conformation) {
        this.error = 'Confirmation password should be the same as password. Please retype password.'
      } else {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user
            db.collection(user.uid).doc('user').set({
              lastName: this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1),
              firstName: this.fristname.charAt(0).toUpperCase() + this.fristname.slice(1),
              email: this.email
            }).then(() => {
              // Redirect user to Workout page
              this.$router.replace({ name: 'Workout' })
            }).catch((error) => {
              console.error('Error writing document: ', error)
            })
          })
          // Error handler
          .catch((error) => {
            this.show = false
            // const errorCode = error.code
            const errorMessage = error.message
            this.error = errorMessage
            // console.log(errorCode)
            // console.log(errorMessage)
          })
      }
    }
  }
}
</script>
