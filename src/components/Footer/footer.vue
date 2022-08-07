<template>
      <div class="footer">
        <div class="footer__wrapper">
            <div class="footer__desc">
                <h1>WORKOUTS TRACKER</h1>
                <p> © {{ new Date().getFullYear() }}  Online Workout Tracker. All Rights Reserved</p>
            </div>
            <div class="footer__links">
                <h2 class="footer__title">Links</h2>
                <router-link class="footer__link" to= "/" exact>Home</router-link >
                <router-link class="footer__link" to= "/workouts">Workouts</router-link>
                <!-- <router-link class="footer__link" to= "/resources">Resources</router-link> -->
            </div>
        </div>
        <div class="footer__wrapper">
            <div class="footer__links">
              <h2 class="footer__title">Workouts </h2>
              <router-link class="footer__link" to= "/workouts">Intense Cardios</router-link>
              <router-link class="footer__link" to= "/workouts">Strength Trainings</router-link>
              <router-link class="footer__link" to= "/workouts">Yoga & Meditation</router-link>
            </div>
            <div class="footer__links">
              <h2 class="footer__title">User</h2>
              <router-link class="footer__link" to= "/login">Log in</router-link>
              <router-link class="footer__link" to= "/register">Sign Up</router-link>
              <a href="#" class="footer__link">Scroll Top</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
