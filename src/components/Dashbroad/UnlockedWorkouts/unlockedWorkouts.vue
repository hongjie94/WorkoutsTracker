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
            @mouseenter="overProgress((index), (unlockedWorkout.workoutName))"
            @mouseleave="leaveProgress"
            v-for="(unlockedWorkout, index) in unlockedWorkouts"
            :key="unlockedWorkout.index"
            >
            <router-link :to="'/workouts/'+`${unlockedWorkout.workoutName.replace(/\s/g, '')}`">
              <v-img :src="unlockedWorkout.imgUrl" alt="NotFund"
              class="opacity"/>
              <transition
                appear enter-active-class="animated fadeInUp porgressDelay"
                leave-active-class="animated fadeOutDown porgressDelay">
                <div
                  v-if="showProgress === index & tabVisible"
                  class="workoutProgress"
                  >
                  Progress: {{progress}}%
                </div>
              </transition>
            </router-link>
            <div class="workoutTitle">
              {{unlockedWorkout.workoutName}}
            </div>
          </v-card>
        </div>
        <div class="noWorkouts" v-if="unlockedWorkouts.length < 1">
          <p>No Workouts Available ...</p>
          <v-btn
            @click="toWorkoutPage"
            text
            color="#fff"
            >
            Add Workouts
          </v-btn>
        </div>
    </v-app>
</template>

<script>
import db from '@/components/firebaseInit'
export default {
  name: 'Dashbroad',
  data () {
    return {
      showOpacity: false,
      tabVisible: false,
      t: null,
      showProgress: null,
      progress: null
    }
  },
  props: {
    userCalendar: Array,
    unlockedWorkouts: Array,
    uid: String
  },
  methods: {
    async overProgress (index, workoutName) {
      const programName = workoutName.replace(/\s/g, '')
      const dbprogramName = db.collection(this.uid).doc(programName)
      await dbprogramName.get().then((doc) => {
        if (doc.data()) {
          this.progress = doc.data().Progress
        } else {
          this.progress = 0
        }
      })
      this.t = await setTimeout(() => {
        this.tabVisible = true
        this.showProgress = index
      }, 200)
    },
    leaveProgress () {
      clearTimeout(this.t)
      setTimeout(() => {
        this.tabVisible = false
        this.showProgress = null
      }, 100)
    },
    toWorkoutPage () {
      this.$router.push({ name: 'Workouts' })
    }
  }
}
</script>
<style lang="sass">
.noWorkouts
  color: rgba(255, 255, 255, 0.5)
  margin-top: 10%
.porgressDelay
  animation-duration: 800ms
</style>
