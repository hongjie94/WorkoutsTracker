<template>
  <div class="workout-heading"> <!-- Search bar and category section -->
    <div class="bar">
      <v-toolbar dark color="teal" style="border-radius: 4px">
        <i class="fas fa-dumbbell" style="margin-right:1em"></i>
          <b-dropdown id="dropdown-1"  size="sm" :text="showCategory" class="m-md-2">
            <b-dropdown-item
              @click="showAll(); changeData();">
              ALL
            </b-dropdown-item>
              <b-dropdown-item
              @click="showCardio(); changeData();">
              CARDIO
            </b-dropdown-item>
            <b-dropdown-item
              @click="showMuscle(); changeData();">
              STRENGTH
            </b-dropdown-item>
            <b-dropdown-item
              @click="showYoga(); changeData();">
              YOGA
            </b-dropdown-item>
          </b-dropdown>
          <v-autocomplete
            :search-input.sync="search"
            class="mx-4"
            flat
            hide-no-data
            hide-details
            solo-inverted
            label="Search Workout..."
            @keyup.enter="enterPressed(); changeData();"
            />
          <span
            class="workoutCounts"
            v-b-tooltip.hover
            :title="'Total number of ' + Category">
            {{workoutCounts}}
          </span>
      </v-toolbar>
    </div>
  </div>
</template>

<script>
import { bus } from '@/main'
export default {
  data () {
    return {
      select: '',
      search: null,
      showCategory: 'ALL',
      pageNum: null,
      Category: 'Workouts',
      workoutCounts: null,
      page: 1,
      noResult: false
    }
  },
  computed: {
    // Filter all Workouts for search result
    filterWorkouts () {
      return this.$store.state.workouts.filter((workout) => {
        return workout.name.toLowerCase().match(this.select.toLowerCase())
      })
    }
  },
  methods: {
    // When Click Category All (Default)
    showAll () {
      this.showCategory = 'ALL'
      this.Category = 'Workouts'
      this.workoutCounts = this.$store.state.workouts.length
      this.pageNum = Math.ceil(this.$store.state.workouts.length / 10)
      this.noResult = false
      this.page = 1
    },
    // When Click Category Cardio
    showCardio () {
      this.showCategory = 'CARDIO'
      this.Category = 'Cardio Workouts'
      this.workoutCounts = this.$store.getters.CardioWorkouts.length
      this.pageNum = Math.ceil(this.$store.getters.CardioWorkouts.length / 10)
      this.noResult = false
      this.page = 1
    },
    // When Click Category Muscle
    showMuscle () {
      this.showCategory = 'STRENGTH'
      this.Category = 'STRENGTH Workouts'
      this.workoutCounts = this.$store.getters.MuscleWorkouts.length
      this.pageNum = Math.ceil(this.$store.getters.MuscleWorkouts.length / 10)
      this.noResult = false
      this.page = 1
    },
    // When Click Category Yoga
    showYoga () {
      this.showCategory = 'YOGA'
      this.Category = 'Yoga Workouts'
      this.workoutCounts = this.$store.getters.YogaWorkouts.length
      this.pageNum = Math.ceil(this.$store.getters.YogaWorkouts.length / 10)
      this.noResult = false
      this.page = 1
    },
    // When user press enter in search bar
    enterPressed () {
      this.select = this.search
      this.showCategory = 'SEARCH'
      this.Category = 'Search results'
      this.workoutCounts = this.filterWorkouts.length
      if (this.workoutCounts === 0) {
        this.noResult = true
      } else if (this.workoutCounts >= 1) {
        this.noResult = false
      }
      this.pageNum = Math.ceil(this.filterWorkouts.length / 10)
    },
    // Update data from parent components
    changeData () {
      bus.$emit('changeData', {
        search: this.search,
        select: this.select,
        showCategory: this.showCategory,
        workoutCounts: this.workoutCounts,
        pageNum: this.pageNum,
        noResult: this.noResult,
        page: this.page,
        filterWorkouts: this.filterWorkouts
      })
    }
  },
  mounted () {
    // Get total workoutout counts
    this.workoutCounts = this.$store.state.workouts.length
    // Get page number for pagination
    this.pageNum = Math.ceil(this.$store.state.workouts.length / 10)
    // Pass data to parent components
    bus.$emit('changeData', {
      search: this.search,
      select: this.select,
      showCategory: this.showCategory,
      workoutCounts: this.workoutCounts,
      pageNum: this.pageNum,
      noResult: this.noResult,
      page: this.page,
      filterWorkouts: this.filterWorkouts
    })
  }
}
</script>
