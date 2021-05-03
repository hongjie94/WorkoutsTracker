<template>
  <div class="workout">
    <div class="outterlayer">
      <div class="container cards">
        <div class="row" min-height=395px>
          <WorkoutHeading />
          <WorkoutCards
            :page = "page"
            :showCategory = "showCategory"
            :filterWorkouts ="filterWorkouts"
            :select = "select"
            :no-result = "noResult"
            :pageNum = "pageNum"
          />
        </div>
      </div>
        <WorkoutPagination
        :pageNum = "pageNum"
        />
    </div>
  </div>
</template>

<script>
import WorkoutHeading from '@/components/Workout/workoutHeading.vue'
import WorkoutCards from '@/components/Workout/workoutCards.vue'
import WorkoutPagination from '@/components/Workout/workoutPagination.vue'
import { bus } from '@/main'
import { mapActions } from 'vuex'
import firebase from 'firebase/app'
export default {
  name: 'Workouts',
  components: {
    WorkoutHeading,
    WorkoutCards,
    WorkoutPagination
  },
  data () {
    return {
      page: 1,
      showCategory: 'All',
      search: null,
      select: '',
      noResult: false,
      pageNum: null,
      filterWorkouts: [],
      workoutCounts: null
    }
  },
  computed: {
    ...mapActions([
      'getUserData'
    ])
  },
  async mounted () {
    // Get user id form firbase
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        this.uid = uid
        this.$store.dispatch('getUserData', uid)
      }
    })
  },
  created () {
    bus.$on('changePage', (updatedPage) => {
      this.page = updatedPage
    })
    bus.$on('changeData', (data) => {
      this.search = data.search
      this.select = data.select
      this.noResult = data.noResult
      this.showCategory = data.showCategory
      this.workoutCounts = data.workoutCounts
      this.pageNum = data.pageNum
      this.page = data.page
      this.filterWorkouts = data.filterWorkouts
      this.pageNum = Math.ceil(data.workoutCounts / 10)
    })
  }
}
</script>
