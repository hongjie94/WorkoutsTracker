<template>
  <div id="app">
    <MyNav/>
      <div>
        <transition  appear enter-active-class="animated fadeInDown customDelay" leave-active-class="animated fadeOut">
          <router-view/>
        </transition>
      </div>
    <MyFooter/>
  </div>
</template>

<script>
import MyFooter from '@/components/footer.vue'
import MyNav from '@/components/nav.vue'
export default {
  components: { MyFooter, MyNav },
  name: 'App'
}
</script>

<style scoped>
.customDelay {
  animation-delay: .5s;
  animation-duration: 2000ms;
}
</style>
