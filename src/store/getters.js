export default {
  CardioWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Cardio'
    )
  },
  MuscleWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Muscle'
    )
  },
  YogaWorkouts: (state) => {
    return state.workouts.filter(
      (workout) => workout.category === 'Yoga'
    )
  }
}
