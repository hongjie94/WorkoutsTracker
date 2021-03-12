<template>
  <div id="app">
    <!-- <div id="nav">
      <div id="logo">
        <img src="../public/logo.png">
      </div>
      <div id="link">
        <router-link to= "/"> Home </router-link>
        <router-link to= "/workout"> Workouts </router-link>
        <router-link to= "/shop"> Shop </router-link>
        <router-link to= "/dashbroad"> Dashbroad </router-link>
        <router-link to= "/login"> Login </router-link>
        <router-link to= "/register"> Register </router-link>
        <router-link to= "/test"> test </router-link>
        <router-link to= "/test" > <i class="fas fa-user"></i> </router-link>
        <a href="javascript:void(0);">
            <i class="fas fa-shopping-cart">
            <span class="num-cart-product">0</span>
        </i>
        </a>
      </div>
    </div> -->
    <MyNav/>
      <div>
        <transition  appear enter-active-class="animated fadeInDown fix" leave-active-class="animated fadeOut">
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

<style>
.fix {
  animation-delay: .5s;
  animation-duration: 2000ms;
}
</style>
