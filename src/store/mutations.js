import db from '@/components/firebaseInit'

export default {
  // Get user UID
  getUid: (state, uid) => { state.uid = uid },

  // Get user Unlocked Workouts form firestore
  getUnlockedWorkouts: (state, uid) => {
    const dbRef = db.collection(uid).doc('unlockedWorkouts')
    dbRef.get().then((doc) => {
      const workouts = doc.data().unlockedWorkouts
      const reverseWorkouts = [...workouts].reverse()
      state.unlockedWorkouts = reverseWorkouts
    })
  },

  // Get user Calendar form firestore
  getUserCalendar: (state, uid) => {
    const dbRef = db.collection(uid).doc('userCalendar')
    dbRef.get().then((doc) => {
      const calendarData = doc.data().userCalendar
      state.userCalendar = calendarData
    })
  }
}
