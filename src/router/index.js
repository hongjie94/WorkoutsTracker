import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Authentication/Login.vue'
import Register from '../views/Authentication/Register.vue'
import ResetPassword from '../views/Authentication/ResetPassword.vue'
import Shop from '../views/Shop.vue'
import Workout from '../views/Workout.vue'
import InsaityMax30 from '../views/Workouts/InsanityMax30.vue'
import Dashbroad from '../views/Dashbroad.vue'
import Cart from '../views/Cart.vue'
import firebase from 'firebase'
import '@firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/resetPassword',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/workout',
    name: 'Workout',
    component: Workout
  },
  {
    path: '/workouts/:name',
    name: 'InsaityMax30',
    component: InsaityMax30
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/dashbroad',
    name: 'Dashbroad',
    component: Dashbroad,
    meta: { requiresAuth: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})
export default router
