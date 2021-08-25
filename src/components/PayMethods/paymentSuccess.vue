<template>
<div class='paymentSuccess'>
   <!-- Payment success content  -->
  <div class='paymentSuccess__content' v-if='getStripeWorkoutName === workoutName'>
    <img class="successImg" src="./check.png" alt="Success checked">
    <h1>Thanks for your payment</h1>
    <h2>You have unlocked {{workoutName}}</h2>
    <h5 class="pb-3">A {{Object.values(CurrentUnlockedWorkout[0].includes)[0]}} With {{Object.values(CurrentUnlockedWorkout[0].includes)[2]}}</h5>
    <v-btn class="p-4 mt-4 AccessBtn" @click="toDashboard">Access to workout</v-btn>
  </div>

  <!-- Page Expired  -->
  <div class='ExpiredLink' v-if='getStripeWorkoutName !== workoutName'>
    <h1 class="mb-2">Expired Links</h1>
    <h5>This links has expired. This means that your payment has already been processed or your session has expired.</h5>
    <v-btn class="p-4 mt-3 AccessBtn" @click="$router.go(-1)">
      <v-icon left>
      mdi-arrow-left
    </v-icon>
      Go Back</v-btn>
  </div>
</div>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'PaymentSuccess',
  data () {
    return {
      workoutName: null,
      getStripeWorkoutName: false,
      uid: null,
      price_id: null,
      CurrentUnlockedWorkout: null
    }
  },
  computed: {
    ...mapState([
      'unlockedWorkouts'
    ]),
    ...mapActions([
      'getUserData'
    ])
  },
  async created () {
    // Get Current Price Id
    this.price_id = 'price_' + this.$route.params.workout_id

    // Check if user was directed from  Stripe Payment page
    this.getStripeWorkoutName = localStorage.getItem('StripeWorkoutName')

    await firebase.auth().onAuthStateChanged(user => {
      this.uid = firebase.auth().currentUser.uid
      this.CurrentUnlockedWorkout = this.$store.state.workouts.filter((workout) => {
        return workout.price_id === this.price_id
      })
    })

    this.unlockedWorkouts.forEach(workout => {
      console.log(workout)
      console.log(workout.workoutName)
    })

    // Get Current Workout Name
    this.workoutName = this.CurrentUnlockedWorkout[0].name

    const saveWorkoutToDB = async (currentWorkoutImgUrl) => {
      // Get New unlocked workouts from user
      const newWorkouts = {
        workoutName: this.workoutName,
        workoutId: this.$route.params.workout_id,
        imgUrl: currentWorkoutImgUrl,
        unlockedTime: new Date()
      }
      // Save to firebase
      const dbRef = db.collection(this.uid).doc('unlockedWorkouts')
      if (this.unlockedWorkouts === undefined) {
        this.unlockedWorkouts = []
        await dbRef.set({
          unlockedWorkouts: this.unlockedWorkouts
        })
      } else {
        this.unlockedWorkouts.push(newWorkouts)
        await dbRef.set({
          unlockedWorkouts: this.unlockedWorkouts
        }, { merge: true })
      }
    }
    const getWorkoutDatas = async () => {
      const url = `https://workoutstracker-default-rtdb.firebaseio.com/${this.$route.params.workout_id}.json`
      let CalendarData = []
      await axios
        .get(url)
        .then(response => (CalendarData = response.data))
      const dbRef = db.collection(this.uid).doc(this.workoutName.replace(/\s/g, ''))
      await dbRef.set({
        Calendar: CalendarData.Calendar,
        Videos: CalendarData.Videos,
        ProgramName: CalendarData.ProgramName,
        TotalWorkoutDays: CalendarData.TotalWorkoutDays,
        CompletedDays: [],
        Progress: 0
      }, { merge: true })
    }
    if (this.CurrentUnlockedWorkout[0].price_id === this.price_id && this.getStripeWorkoutName === this.workoutName) {
      saveWorkoutToDB(this.CurrentUnlockedWorkout[0].strogeURL)
      getWorkoutDatas()
    }
    window.addEventListener('beforeunload', localStorage.setItem('StripeWorkoutName', null))
    this.$store.dispatch('getUserData', this.uid)
  },
  methods: {
    toDashboard () {
      this.$router.push({ name: 'Dashbroad' })
    }
  }
}
</script>
