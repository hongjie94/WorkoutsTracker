<template>
      <div class="footer">
        <div class="footer__wrapper">
            <div class="footer__desc">
                <h1>WORKOUTS TRACKER</h1>
                <p> © {{ new Date().getFullYear() }}  Online Workout Tracker. All Rights Reserved</p>
            </div>
            <div class="footer__links">
                <h2 class="footer__title">Contact Us</h2>
                <a href="#" class="footer__link">Contact</a>
                <a href="#" class="footer__link">Support</a>
                <a href="#" class="footer__link">Sponserships</a>
            </div>
        </div>
        <div class="footer__wrapper">
            <div class="footer__links">
                <h2 class="footer__title">Workouts </h2>
                <a href="/Workout" class="footer__link">Intense Cardios</a>
                <a href="/Workout" class="footer__link">Strength Trainings</a>
                <a href="#" class="footer__link">Yoga & Meditation</a>
            </div>
            <div class="footer__links">
                <h2 class="footer__title">Products</h2>
                <a href="#" class="footer__link">Instagram</a>
                <a href="#" class="footer__link">Facebook</a>
                <a href="#" class="footer__link">Youtube</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyFooter'
}
</script>
