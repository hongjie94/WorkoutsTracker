<template>
 <transition appear enter-active-class="animated fadeInDown customDelay" leave-active-class="animated fadeOut">
<div class="workoutCalendars">
  <div class="workout_calendar">
    <!-- Banner -->
    <div class="container p-0">
      <section class="banner jumbotron">
        <h1>{{workoutName}}</h1>
        <h5> Completed: {{progress}}%</h5>
        <div class="progress">
              <div class="progress-bar"
                :style="`width:${progress}%`">
                {{progress}}%
              </div>
        </div>
        <p>Total Days Completed: {{totalCompletedDays}}</p>
        <p>Total Days Remaining: {{remainingDays}}</p>
        <div class="calendar_menu" >
          <b-button
            class="mr-4"
            @click.prevent="toggleCalendar"
            :pressed="showCalendar"
            :variant = "calendar_btn"
          >
          <i class="far fa-calendar-alt" />
          </b-button>
          <b-button
            @click.prevent="toggleVideos"
            :pressed="showVideos"
            :variant = "video_btn"
          >
          <i class="far fa-play-circle" />
          </b-button>
          <b-button
            class="ml-4"
            @click.prevent="$router.push({name: 'Dashbroad'})"
          >
          <i class="fas fa-dumbbell"></i>
          </b-button>
        </div>
      </section>
    </div>

    <!-- Calendar -->
    <transition  appear enter-active-class="animated fadeInRight m1in">
      <Calendar
        v-if="showCalendar"
        :header = "header"
        :calendars = "Calendar"
        :workoutVideos = "workoutVideos"
        :totalWorkoutDays = "totalWorkoutDays"
        :currentProgram = "workoutName"
        :progress = "progress"
        :lastWeeks = "lastWeeks"
        >
      </Calendar>
    </transition>

    <!-- Videos -->
    <transition  appear enter-active-class="animated fadeInRight vin" leave-active-class="animated fadeOutLeft m1out">
    <Video
      v-if="showVideos"
      :workoutVideos = "Videos"
    />
    </transition>
    </div>
  </div>
 </transition>
</template>

<script>
import { bus } from '@/main'
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import Calendar from '@/components/Dashbroad/UnlockedWorkouts/workoutCalendarBase.vue'
import Video from '@/components/Dashbroad/UnlockedWorkouts/workoutVideoBase.vue'
export default {
  name: 'CurrentWorkout',
  components: {
    Calendar,
    Video
  },
  data () {
    return {
      calendar_btn: 'primary',
      video_btn: '',
      header: '',
      uid: null,
      showVideos: false,
      showCalendar: true,
      Calendar: null,
      workoutName: null,
      workoutVideos: null,
      totalWorkoutDays: null,
      progress: null,
      completedDays: null,
      totalCompletedDays: null,
      remainingDays: null,
      lastWeeks: null,
      Videos: null
    }
  },
  async mounted () {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        const name = this.$route.params.id
        const dbRef = db.collection(uid).doc(name)
        dbRef.get().then((doc) => {
          this.Calendar = doc.data().Calendar
          this.workoutName = doc.data().ProgramName
          this.workoutVideos = doc.data().Videos
          this.totalWorkoutDays = doc.data().TotalWorkoutDays
          this.progress = doc.data().Progress
          this.completedDays = doc.data().CompletedDays
          this.totalCompletedDays = doc.data().CompletedDays.length
          this.lastWeeks = doc.data().Calendar.length
          this.remainingDays = (doc.data().TotalWorkoutDays - doc.data().CompletedDays.length)
          this.header = `${doc.data().ProgramName} Calendar`
        })
      }
    })
  },
  created () {
    bus.$on('changeCompletedData', (updatedData) => {
      this.progress = updatedData.progress
      this.totalCompletedDays = updatedData.completedDays
      this.remainingDays = updatedData.remainingDays
    })
  },
  methods: {
    async toggleVideos () {
      await firebase.auth().onAuthStateChanged(user => {
        if (user) {
          const uid = firebase.auth().currentUser.uid
          const name = this.$route.params.id
          const dbRef = db.collection(uid).doc(name)
          dbRef.get().then((doc) => {
            this.Videos = doc.data().Videos
          })
        }
      })
      this.showCalendar = false
      this.showVideos = true
      this.video_btn = 'primary'
      this.calendar_btn = ''
    },
    toggleCalendar () {
      this.showCalendar = true
      this.showVideos = false
      this.video_btn = ''
      this.calendar_btn = 'primary'
    }
  }
}
</script>
<style>
</style>

<style scoped>
.m1in {
  animation-delay: 0s;
  animation-duration: 1000ms;
}
.m1out {
  animation-delay: 0s;
  animation-duration: 500ms;
}
.m2in {
  animation-delay: 0.4s;
  animation-duration: 1000ms;
}
.vin {
  animation-delay: 0.1s;
  animation-duration: 1000ms;
}
</style>
