<template>
  <div class="home">
    <Hero />
    <Membership />
    <Intro />
    <Sample />
    <HomeEmail />
  </div>
</template>

<script>
import Hero from '@/components/Home/hero.vue'
import Membership from '@/components/Home/membership.vue'
import Intro from '@/components/Home/introduction.vue'
import Sample from '@/components/Home/samples.vue'
import HomeEmail from '@/components/Home/home_email.vue'
export default {
  name: 'Home',
  components: { Hero, Membership, Intro, Sample, HomeEmail }
}
</script>

<style>
</style>
