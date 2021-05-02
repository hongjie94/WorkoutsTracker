<template>
  <WorkoutCardBase
    :show = "show"
    :isActive = "isActive"
    :loading = "loading"
    :absolute = "absolute"
    :opacity = "opacity"
    :overlay = "overlay"
    :unlock = "unlock"
    :unlockClicked = "unlockClicked"
    :workouts = "toggleWorkouts"
    :toggle =  "toggle"
    :noResult = "noResult"
    :select = "select"
  />
</template>

<script>
import WorkoutCardBase from '@/components/Workout/workoutCardBase.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  components: { WorkoutCardBase },
  props: {
    page: Number,
    showCategory: String,
    filterWorkouts: Array,
    noResult: Boolean,
    select: String
  },
  data () {
    return {
      show: false,
      isActive: null,
      loading: true,
      absolute: true,
      opacity: 1,
      overlay: false,
      unlock: [{
        name: '',
        image: '',
        price: '',
        priceId: '',
        unlocked: false
      }]
    }
  },
  computed: {
    ...mapState([
      'workouts',
      'unlockedWorkouts'
    ]),
    ...mapGetters([
      'CardioWorkouts',
      'MuscleWorkouts',
      'YogaWorkouts',
      'UnlockedWorkoutName'
    ]),
    paginationFilter () {
      const page = this.page
      const numItemShow = 10
      const start = (page - 1) * numItemShow
      const end = page * numItemShow
      return this.workouts.slice((start), (end))
    },
    // Toggle dropdown menu
    toggleWorkouts () {
      if (this.showCategory === 'ALL') {
        return this.paginationFilter
      } else if (this.showCategory === 'CARDIO') {
        return this.CardioWorkouts
      } else if (this.showCategory === 'STRENGTH') {
        return this.MuscleWorkouts
      } else if (this.showCategory === 'YOGA') {
        return this.YogaWorkouts
      } else if (this.showCategory === 'SEARCH') {
        return this.filterWorkouts
      } else {
        return this.paginationFilter
      }
    }
  },
  methods: {
    // Toggle workout cards
    toggle (id) {
      if (this.isActive === id) {
        this.isActive = null
      } else if (this.isActive !== id) {
        this.isActive = id
      }
    },
    // Unlock button clicked
    unlockClicked (name, image, price, priceId) {
      this.unlock.name = name
      this.unlock.image = image
      this.unlock.price = price
      this.unlock.priceId = priceId
      this.overlay = !this.overlay
    }
  }
}
</script>
