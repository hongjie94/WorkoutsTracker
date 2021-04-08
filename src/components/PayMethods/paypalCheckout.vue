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
    <!-- <v-btn @click="test">Test</v-btn> -->
  </div>
</template>

<script>
import db from '@/components/firebaseInit'
import PayPal from 'vue-paypal-checkout'
import firebase from 'firebase/app'
import 'firebase/auth'
export default {
  props: {
    price: Number,
    workoutName: String
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
    uid: ''
  }),
  mounted () {
    // Get user id form firbase
    firebase.auth().onAuthStateChanged(user => {
      this.uid = firebase.auth().currentUser.uid
    })
    // Get api key from env
    this.paypal.sandbox = process.env.VUE_APP_PAYPAL_PUBLISHABLE_KEY
    // Number to String
    this.priceToString = this.price.toString()
  },
  methods: {
    paymentAuthorized: function (data) {
      const unlockedWorkout = db.collection(this.uid).doc(this.workoutName)
      unlockedWorkout.set({
        unlocked: true,
        unlcokedTime: new Date()
      }).then(() => {
        alert('payment Authorized and' + this.workoutName.toUpperCase() + ' add to data base')
      }).catch((error) => {
        console.error('Error writing document: ', error)
      })
    },
    test () {
      // db.collection(this.uid).doc(this.workoutName).set({
      //   unlocked: true,
      //   unlcokedTime: new Date()
      // }).then(() => {
      //   alert('payment Authorized and' + this.workoutName.toUpperCase() + ' add to data base')
      // })
      // const unlockedWorkoutName = db.collection(this.uid).doc(this.workoutName)
      // unlockedWorkoutName.set({
      //   capital: false
      // }, { merge: true })
      // var WorkoutStatus = {
      //   clendars: {
      //     month:
      //   }
      // }
      const h = new Date().getHours()
      const m = new Date().getMinutes()
      const s = new Date().getSeconds()
      const completedDate = new Date().toString().split(' ').splice(0, 4).join('_')
      const completedTime = h + ':' + m + ':' + s
      const newEvent = {
        color: 'blue',
        date: '2021-04-16',
        name: 'Max Out Cardio2',
        time: '00:60:00'
      }
      db.collection('Calendar_' + this.uid).doc('WorkoutCompleted' + '_' + completedDate + '_' + completedTime).set({
        Detail: newEvent
      }, { merge: true })

      // .forEach(doc => {
      //   console.log(doc.data())
      // })
      // const unlockData = {
      //   workoutName: this.workoutName,
      //   unlockTime: new Date()
      // }
      // db.collection(this.uid).doc('unlockedWorkouts').add({
      //   workouts: {
      //     unlockData
      //   }
      // }, { merge: true }
      // ).then(() => {
      //   console.log('Document successfully written!')
      // })
    },
    paymentCompleted: function (data) {
      console.log(`paymentCompleted:  + ${data}`)
      alert('Payment Completed')
    }
  }
}
</script>
