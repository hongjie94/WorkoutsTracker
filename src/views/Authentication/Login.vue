<template>
    <div class="auth_login">
      <transition appear enter-active-class="animated bounceInDown delay">
      <div class="auth_form"  @submit.prevent= "login">
          <ul class="tab-group">
            <li class="tab active"><router-link to= "/login"> Log In </router-link></li>
            <li class="tab"><router-link to= "/register"> Sign Up </router-link></li>
          </ul>
        <div id="login">
          <transition enter-active-class="animated headShake">
            <div v-if="error"><h4>{{error}}</h4></div>
          </transition>
          <transition appear enter-active-class="animated flipInX head_delay">
             <h1 class="head" v-show="show">Welcome Back!</h1>
          </transition>
            <form action="/" method="post">
              <div class="field-wrap">
              <input class="auth_input" autocomplete="on" type="email" v-model="email"  placeholder="Email Address" />
            </div>
            <div class="field-wrap">
              <input class="auth_input" type="password" placeholder="Password" autocomplete="on" v-model="password" >
            </div>
            <p class="forgot"><router-link to= "/resetPassword"> Forgot Password?</router-link></p>
            <button type="submit" class="auth_button button-block">Log In</button>
            </form>
          </div>
      </div>
      </transition>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: '',
      show: true,
      loginText: ''
    }
  },
  methods: {
    async login () {
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.$router.replace({ name: 'Dashbroad' })
      } catch (error) {
        this.show = false
        this.error = error.message
      }
    }
  }
}
</script>
