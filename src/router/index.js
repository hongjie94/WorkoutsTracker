import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/auth'
import Home from '../views/Home.vue'
import Login from '../views/Authentication/Login.vue'
import Register from '../views/Authentication/Register.vue'
import ResetPassword from '../views/Authentication/ResetPassword.vue'
import Workouts from '../views/Workouts.vue'
import CurrentWorkout from '../components/Dashbroad/UnlockedWorkouts/currentWorkout.vue'
import Dashbroad from '../views/Dashbroad.vue'
// import Resources from '../views/Resources.vue'
import PaymentSuccess from '../views/PaymentSuccess.vue'

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
    path: '/workouts',
    name: 'Workouts',
    component: Workouts
  },
  {
    path: '/workouts/:id',
    name: 'CurrentWorkout',
    component: CurrentWorkout,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/resources',
  //   name: 'Resources',
  //   component: Resources
  // },
  {
    path: '/paymentSuccess/:workout_id',
    name: 'PaymentSuccess',
    component: PaymentSuccess
  },
  {
    path: '/dashbroad',
    name: 'Dashbroad',
    component: Dashbroad,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
