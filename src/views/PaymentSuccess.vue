<template>
<div style="background: white">
  <h1>Success Unlocked: </h1>
  {{workoutName}}
  <div>{{unlockedWorkout}}</div>
</div>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'PaymentSuccess',
  data () {
    return {
      workoutName: null,
      uid: null,
      price_id: null,
      unlockedWorkout: null
    }
  },
  created () {
    this.price_id = 'price_' + this.$route.params.workout_id
    firebase.auth().onAuthStateChanged(user => {
      this.uid = firebase.auth().currentUser.uid
      this.unlockedWorkout = this.$store.state.workouts.filter((workout) => {
        return workout.price_id === this.price_id
      })
      this.workoutName = this.unlockedWorkout[0].name
      db.collection(this.uid).doc(this.workoutName).set({
        unlocked: true,
        unlcokedTime: new Date()
      })
      // .then(() => {
      //   alert('payment Authorized and' + this.workoutName.toUpperCase() + ' add to data base')
      // })
    })
  }
}
</script>

<style>

</style>
