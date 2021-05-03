<template>
  <div class="paypalCheckout">
    <PayPal
      env="sandbox"
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
    <v-btn @click="paymentCompleted">test</v-btn>
  </div>
</template>

<script>
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
      sandbox: `${process.env.VUE_APP_PAYPAL_PUBLISHABLE_KEY}`,
      production: ''
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
      'userCalendar'
    ]),
    ...mapActions([
      'getUserData'
    ])
  },
  async mounted () {
    // Get api key from env
    this.paypal.sandbox = process.env.VUE_APP_PAYPAL_PUBLISHABLE_KEY
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
    paymentAuthorized: function (data) {
      // Get New unlocked workouts from user
      const newWorkouts = {
        workoutName: this.workoutName,
        workoutId: this.price_id.split('price_').pop(','),
        imgUrl: this.unlockImage,
        unlockedTime: new Date()
      }
      // Save to firebase
      if (this.unlockedWorkouts === undefined) {
        this.unlockedWorkouts = []
      }
      const dbRef = db.collection(this.uid).doc('unlockedWorkouts')
      this.unlockedWorkouts.push(newWorkouts)
      dbRef.set({
        unlockedWorkouts: this.unlockedWorkouts
      }, { merge: true })
    },
    async paymentCompleted (data) {
      const workoutId = this.price_id.split('price_').pop(',')
      const url = `https://workoutstracker-default-rtdb.firebaseio.com/${workoutId}.json`
      let CalendarData = []
      await axios
        .get(url)
        .then(response => (CalendarData = response.data))
      alert('check console')
      // console.log(this.price_id.split('price_').pop(','))
      const dbRef = db.collection(this.uid).doc(this.workoutName.replace(/\s/g, ''))
      dbRef.set({
        Month1Calendar: CalendarData.Month1Calendar,
        Month2Calendar: CalendarData.Month2Calendar,
        Videos: CalendarData.Videos,
        ProgramName: CalendarData.ProgramName,
        TotalWorkoutDays: CalendarData.TotalWorkoutDays,
        CompletedDays: [],
        Progress: 0
      }, { merge: true })
      this.$store.dispatch('getUserData', this.uid)
      this.$router.push({ name: 'Dashbroad' })
      console.log(`paymentCompleted:  + ${data}`)
      alert('Payment Completed')
    }
  }
}
</script>
