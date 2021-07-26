import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: `${process.env.VUE_APP_FIREBASEAPP_API_KEY}`,
  authDomain: 'workoutstracker.firebaseapp.com',
  projectId: 'workoutstracker',
  storageBucket: 'workoutstracker.appspot.com',
  messagingSenderId: `${process.env.VUE_APP_MESSAGEING_SENDER_ID}`,
  appId: `${process.env.VUE_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.VUE_APP_MEASUREMENT_ID}`
})

export default firebaseApp.firestore()
