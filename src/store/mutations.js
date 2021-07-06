import db from '@/components/firebaseInit'

export default {
  // Get user UID
  getUid: (state, uid) => { state.uid = uid },

  // Get user Unlocked Workouts form firestore
  getUnlockedWorkouts: (state, uid) => {
    const dbRef = db.collection(uid).doc('unlockedWorkouts')
    dbRef.get().then((doc) => {
      if (doc.data()) {
        const workouts = doc.data().unlockedWorkouts
        const reverseWorkouts = [...workouts].reverse()
        state.unlockedWorkouts = reverseWorkouts
      } else {
        return console.log('No unlocked Workout')
      }
    })
  },

  // Get user Calendar form firestore
  getUserCalendar: (state, uid) => {
    const dbRef = db.collection(uid).doc('userCalendar')
    dbRef.get().then((doc) => {
      if (doc.data()) {
        const calendarData = doc.data().userCalendar
        state.userCalendar = calendarData
      } else {
        return console.log('No Calendar Data')
      }
    })
  }
}
