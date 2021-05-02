<template>
<div class="workoutCalendars">
  <div class="workout_calendar">
    <!-- Banner -->
    <div class="container p-0">
      <section class="banner jumbotron">
        <h1>{{workoutName}}</h1>
        <h5> Completed: {{progress}}%</h5>
        <p>Total Days Completed: {{totalCompletedDays}}</p>
        <p>Remaining Days: {{remainingDays}}</p>
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
            </div>
      </section>
    </div>

    <!-- Calendar -->
    <Calendar
      v-show="month1 && showCalendar"
      :month = "month.one"
      :calendars = "month1Calendar"
      :workoutVideos = "workoutVideos"
      :totalWorkoutDays = "totalWorkoutDays"
      :currentProgram = "workoutName"
      :progress = "progress"
      >
      <div slot="monthToggleBtn" class="monthToggleBtn">
        <b-button class="monthBtn1" @click="showMonth1" :pressed="!month2 || month1" squared :variant="month1_btn" >MONTH 1</b-button>
        <b-button class="monthBtn2"  @click="showMonth2" :pressed="!month1" :variant="month2_btn" squared>MONTH 2</b-button>
      </div>
    </Calendar> <!-- month1 -->
    <Calendar
      v-show="month2 & showCalendar"
      :month = "month.two"
      :calendars = "month2Calendar"
      :workoutVideos = "workoutVideos"
      :totalWorkoutDays = "totalWorkoutDays"
      :currentProgram = "workoutName"
      :progress = "progress"
      >
      <div slot="monthToggleBtn" class="monthToggleBtn">
        <b-button  class="monthBtn1" @click="showMonth1" :pressed="!month2 || month1" squared :variant="month1_btn" >MONTH 1</b-button>
        <b-button  class="monthBtn2" @click="showMonth2" :pressed="!month1" :variant="month2_btn" squared>MONTH 2</b-button>
      </div>
    </Calendar> <!-- month2 -->

    <!-- Videos -->
    <Video
      v-show="showVideos"
      :workoutVideos = "workoutVideos"
    />
    </div>
  </div>
</template>

<script>
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
      month1: true,
      month2: false,
      month1_btn: 'primary',
      month2_btn: '',
      calendar_btn: 'primary',
      video_btn: '',
      month: {
        one: 'Month 1',
        two: 'Month 2'
      },
      uid: null,
      showVideos: false,
      showCalendar: true,
      month1Calendar: null,
      month2Calendar: null,
      workoutName: null,
      workoutVideos: null,
      totalWorkoutDays: null,
      progress: null,
      completedDays: null,
      totalCompletedDays: null,
      remainingDays: null
    }
  },
  async mounted () {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        const name = this.$route.params.id
        const dbRef = db.collection(uid).doc(name)
        dbRef.get().then((doc) => {
          this.month1Calendar = doc.data().Month1Calendar
          this.month2Calendar = doc.data().Month2Calendar
          this.workoutName = doc.data().ProgramName
          this.workoutVideos = doc.data().Videos
          this.totalWorkoutDays = doc.data().TotalWorkoutDays
          this.progress = doc.data().Progress
          this.completedDays = doc.data().CompletedDays
          this.totalCompletedDays = doc.data().CompletedDays.length
          this.remainingDays = (doc.data().TotalWorkoutDays - doc.data().CompletedDays.length)
        })
      }
    })
  },
  methods: {
    showMonth1: function () {
      this.month1 = true
      this.month2 = false
      this.month1_btn = 'primary'
      this.month2_btn = ''
      return {
        month1: true
      }
    },
    showMonth2: function () {
      this.month2 = true
      this.month1 = false
      this.month1_btn = ''
      this.month2_btn = 'primary'
      return {
        month2: true
      }
    },
    toggleVideos () {
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
