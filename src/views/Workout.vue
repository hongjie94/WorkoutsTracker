<template>
  <div class="workout">
    <!-- <div class="workout-cards">
    <v-card :key="workout.index" v-for="workout in workouts" class="v-c" max-width="245">
      <p>{{workout.maxOutAbs}}</p> -->
      <!-- <a :href="`${workout.maxOutAbs}`">Click for download</a> -->
      <!-- <br> <iframe id="lbry-iframe" width="560" height="315" :src="`${workout.maxOutAbs}`" allowfullscreen></iframe> -->
      <!-- <p :key="month1.index" v-for="month1 in workout.month1Calendar">{{month1.week1}}</p>
        <router-link :to="`/workouts/${workout.route}`">
        <v-img :src="require('@/components/Workouts/' + workout.imageURL)" class="max30" height="auto" />
        </router-link>
        <div :class="{wks:showProgress}">Unlock for $ 4.99</div>
    </v-card>
    </div> -->
    <div class="outterlayer">
      <div class="container cards">
        <div class="row">
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
export default {
  name: 'Workout',
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
