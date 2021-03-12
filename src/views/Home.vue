<template>
  <div class="home">
    <Hero />
    <Membership />
    <HomeEmail />
  </div>
</template>

<script>
import Hero from '@/components/Home/hero.vue'
import Membership from '@/components/Home/membership.vue'
import HomeEmail from '@/components/Home/home_email.vue'
export default {
  name: 'Home',
  components: { Hero, Membership, HomeEmail }
}
</script>

<style>
</style>
