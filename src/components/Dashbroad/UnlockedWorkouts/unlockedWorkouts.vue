<template>
    <v-app>
        <v-card class="theme--dark" style="border-radius: 0;">
            <v-card-text>
                <div class="display-3 font-weight-thin dashHeader">
                  Workouts
                </div>
            </v-card-text>
        </v-card>
        <div class="unlocked_div">
        <v-card class="unlocked_div_cards"
            @mouseover="overProgress(index)"
            @mouseleave="leaveProgress"
            v-for="(unlockedWorkout, index) in unlockedWorkouts"
            :key="unlockedWorkout.index"
            >
            <router-link :to="'/workouts/'+`${unlockedWorkout.workoutName.replace(/\s/g, '')}`">
              <v-img :src="unlockedWorkout.imgUrl" alt="NotFund"
              :class="{ opacity: showProgress === index }"/>
            </router-link>
            <div class="workoutTitle">
              {{unlockedWorkout.workoutName}}
            </div>
            <div
              v-if="showProgress === index"
              class="workoutProgress"
              >
              Progress {{unlockedWorkout.progress}}%
            </div>
          </v-card>
        </div>
    </v-app>
</template>

<script>
export default {
  name: 'Dashbroad',
  data () {
    return {
      showProgress: null
    }
  },
  props: {
    userCalendar: Array,
    unlockedWorkouts: Array
  },
  methods: {
    overProgress (index) {
      this.showProgress = index
    },
    leaveProgress () {
      this.showProgress = null
    }
  }
}
</script>
