<template>
     <div class="home_email">
        <div class="email__content">
            <h1 class="animate-email">Get Access to Your Favorite Workouts</h1>
            <p class="animate-email">Sign up and Get Started Today!</p>
            <form action="#" class="animate-email">
                <div class="form__wrap">
                    <label for="email">
                        <input type="email" v-model="email"  placeholder="Enter your email" id="email">
                    </label>
                    <button class="button" type="submit" @click='getEmail' >Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: ''
    }
  },
  computed: {
    ...mapActions([
      'getNewUserEmail'
    ])
  },
  methods: {
    async getEmail () {
      localStorage.email = this.email
      this.$router.replace({ name: 'Register' })
    }
  }
}
</script>

<style>
</style>
