<template>
  <div class="paypalCheckout">
    <PayPal
      env="production"
      :amount="priceToString"
      currency="USD"
      locale="en_US"
      :button-style="myStyle"
      :client="paypal"
      :experience= "experienceOptions"
      v-on:payment-authorized="paymentAuthorized"
      v-on:payment-completed="paymentCompleted"
      >
    </PayPal>
    <button @click="checkOut">Click Me!</button>
  </div>
</template>

<script>
import swal from 'sweetalert'
import db from '@/components/firebaseInit'
import PayPal from 'vue-paypal-checkout'
import firebase from 'firebase/app'
import 'firebase/auth'
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    price: Number,
    workoutName: String,
    price_id: String,
    unlockImage: String
  },
  components: { PayPal },
  data: () => ({
    paypal: {
      sandbox: `${process.env.VUE_APP_PAYPAL_TEST_PUBLISHABLE_KEY}`,
      production: `${process.env.VUE_APP_PAYPAL_PUBLISHABLE_KEY}`
    },
    myStyle: {
      shape: 'rect',
      size: 'responsive',
      color: 'gold',
      label: 'pay',
      tagline: 'false'
    },
    experienceOptions: {
      input_fields: {
        no_shipping: 1
      }
    },
    priceToString: '',
    uid: null
  }),
  computed: {
    ...mapState([
      'unlockedWorkouts'
    ]),
    ...mapActions([
      'getUserData'
    ])
  },
  async mounted () { // workoutstracker-buyer@test.com (test account)
    // Get api key from env
    this.paypal.production = process.env.VUE_APP_PAYPAL_PUBLISHABLE_KEY

    // Number to String
    this.priceToString = this.price.toString()
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        this.uid = uid
        this.$store.dispatch('getUserData', uid)
      }
    })
  },
  methods: {
    async paymentAuthorized (data) {
      // Get New unlocked workouts from user
      const newWorkouts = {
        workoutName: this.workoutName,
        workoutId: this.price_id.split('price_').pop(','),
        imgUrl: this.unlockImage,
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
    },
    async paymentCompleted (data) {
      const workoutId = this.price_id.split('price_').pop(',')
      const url = `https://workoutstracker-default-rtdb.firebaseio.com/${workoutId}.json`
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
      this.$store.dispatch('getUserData', this.uid)
      swal('Payment is completed', { icon: 'success' })
      this.$router.push({ name: 'Dashbroad' })
    },
    async checkOut () {
      const newWorkouts = {
        workoutName: this.workoutName,
        workoutId: this.price_id.split('price_').pop(','),
        imgUrl: this.unlockImage,
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
      const workoutId = this.price_id.split('price_').pop(',')
      const url = `https://workoutstracker-default-rtdb.firebaseio.com/${workoutId}.json`
      let CalendarData = []
      await axios
        .get(url)
        .then(response => (CalendarData = response.data))
      const dbRef2 = db.collection(this.uid).doc(this.workoutName.replace(/\s/g, ''))
      await dbRef2.set({
        Calendar: CalendarData.Calendar,
        Videos: CalendarData.Videos,
        ProgramName: CalendarData.ProgramName,
        TotalWorkoutDays: CalendarData.TotalWorkoutDays,
        CompletedDays: [],
        Progress: 0
      }, { merge: true })
      this.$store.dispatch('getUserData', this.uid)
      swal('Payment is completed', { icon: 'success' })
      this.$router.push({ name: 'Dashbroad' })
    }
  }
}
</script>
