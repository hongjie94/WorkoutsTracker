<template>
  <div class="container Month-Calendar">
      <div class="container">
        <slot name="monthToggleBtn" />
          <div class="row month-rows">
              <div class="col-12 month">
                  <h4>{{month}}</h4>
              </div>
          </div>
          <div class="row date-rows">
              <div class="col-1"></div>
              <div class="col"><p>MONDAY</p></div>
              <div class="col" ><p>TUESDAY</p></div>
              <div class="col"><p>WENDSDAY</p></div>
              <div class="col"><p>THURSDAY</p></div>
              <div class="col"><p>FRIDAY</p></div>
              <div class="col"><p>SATURDAY</p></div>
              <div class="col"><p>SUNDAY</p></div>
          </div>
          <!-- :resizable="true" -->
          <div class="row week-rows" :key="index" v-for="(calendar, index) in calendars">
            <div class="col-1 allweeks" :class="{ noborder: calendar.week === 4 || calendar.week === 8}">
              <div class="weeks">
                <span>WEEK</span>
                <h1>{{calendar.week}}</h1>
              </div>
            </div>
              <div
                class="col week1 week-workouts"
                @click="getWorkoutData((calendar.mon.videoIndex), (calendar.week), (calendar.mon.day))"
              >
                <div v-if="calendar.week ===1" class="firstWeek"><p>Take your "Day 1"</p><p>pic & stats</p></div>
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.mon.day)}"
                  @click="showOverlay(calendar.mon.videoIndex)">{{calendar.mon.workout}}</p>
              </div>
              <div
                class="col week-workouts"
                @click="getWorkoutData((calendar.tue.videoIndex), (calendar.week), (calendar.tue.day))"
              >
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.tue.day)}"
                  @click="showOverlay(calendar.tue.videoIndex)">{{calendar.tue.workout}}</p>
              </div>
              <div
                class="col week-workouts"
                @click="getWorkoutData((calendar.wed.videoIndex), (calendar.week), (calendar.wed.day))"
              >
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.wed.day)}"
                  @click="showOverlay(calendar.wed.videoIndex)">{{calendar.wed.workout}}</p>
              </div>
              <div
                class="col week-workouts"
                @click="getWorkoutData((calendar.thu.videoIndex), (calendar.week), (calendar.thu.day))"
              >
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.thu.day)}"
                  @click="showOverlay(calendar.thu.videoIndex)">{{calendar.thu.workout}}</p>
              </div>
              <div
                class="col week-workouts"
                @click="getWorkoutData((calendar.fri.videoIndex), (calendar.week), (calendar.fri.day))"
              >
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.fri.day)}"
                  @click="showOverlay(calendar.fri.videoIndex)">{{calendar.fri.workout}}</p>
              </div>
              <div
                class="col week-workouts"
                @click="getWorkoutData((calendar.sat.videoIndex), (calendar.week), (calendar.sat.day))"
              >
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.sat.day)}"
                  @click="showOverlay(calendar.sat.videoIndex)" v-if="calendar.sat.workout === 'REST'" class="rest">{{calendar.sat.workout}}</p>
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.sat.day)}"
                  @click="showOverlay(calendar.sat.videoIndex)" v-if="calendar.sat.workout !== 'REST'" class="pluse">
                    {{calendar.sat.workout}}
                </p>
                <p
                  :class="{isCompleted : CompletedDays.includes(calendar.sat.day)}"
                  @click="showOverlay(calendar.sat.videoIndex)"
                  v-if="calendar.pluse || calendar.sat.workout === 'REST' "
                  class="pluse">PULSE
                </p>
              </div>
              <div class="col week-workouts">
                <p :class="{isCompleted : CompletedDays.includes(calendar.sun.day)}">
                  {{calendar.sun.workout}}
                </p>
                <div v-if="calendar.week === 4">
                    <div class="lastWeek">
                      <p>Take your "Day 28"</p>
                      <p>pic & stats</p>
                    </div>
                </div>
                <div v-if="calendar.week === 8">
                    <div class="lastWeek">
                      <p>Take your "Day 56"</p>
                      <p>pic & stats</p>
                    </div>
                </div>
              </div>
          </div>
            <v-row justify="center">
            <v-overlay
              class="calendarOverlay"
              :value="overlay">
            <div class="topheader">
              <span> Day # {{workoutDay}} - {{currentWorkout.name}}</span>
              <v-btn @click="hideOverlay" icon dark class="closeBtn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="calendarFrame">
              <div class="calendarDownload">
                <div class="icon_div">
                  <div class="dl_icon">
                    <a :href="currentWorkout.downloadLinks" download>
                      <i class="mdi mdi-download-circle"></i>
                    </a>
                  </div>
                </div>
              </div>
            <iframe
            class="calendarOverlay-iframe"
            :src="currentWorkout.url"
            allowfullscreen
            />
            </div>
            <!-- <p>{{currentWorkout.url}}</p>
            <p>{{currentWorkout.thumnail}}</p> -->
            <!-- if workout is incomplete -->
            <div class="calendarOverlay-bottom" v-if="!isCompleted">
              <v-app class="calendarOverlay-bg switch">
                <v-switch
                  v-model="toggleStatus"
                  :label="workoutStatus"
                />
              </v-app>
              <div
                v-b-tooltip.hover
                title= "Customize calendar color"
                class="colorPicker"
                :class="{
                  Blue: selectColors === 'Blue',
                  Indigo: selectColors === 'Indigo',
                  Purple: selectColors === 'Purple',
                  Cyan: selectColors === 'Cyan',
                  Green: selectColors === 'Green',
                  Orange: selectColors === 'Orange',
                  Grey: selectColors === 'Grey'
                  }"
                >
                <span class="mdi mdi-invert-colors"></span>
              </div>
              <v-app  class="calendarOverlay-bg select">
                <v-select
                  dark
                  :items="colors"
                  dense
                  solo
                  required
                  v-model="selectColors"
                />
              </v-app>
              <v-btn
               @click="summitWorkoutData(currentWorkout.name)"
               :disabled="!toggleStatus"
               >summit</v-btn>
            </div>

            <div class="calendarOverlay-bottom_complete" v-if="isCompleted">
              <!-- <span style='color:red;text-decoration:line-through'>
                <span style='color:black'>black with red strikethrough</span>
              </span> -->
                Workout Completed  <v-icon class="checkCircle">mdi-check-circle</v-icon>
            </div>
          </v-overlay>
          </v-row>
      </div>
  </div>
</template>

<script>
import { bus } from '@/main'
import firebase from 'firebase/app'
import db from '@/components/firebaseInit'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CurrentWorkout',
  data () {
    return {
      week4: true,
      currentWorkout: {},
      workoutName: '',
      workoutStatus: 'Complete',
      toggleStatus: false,
      overlay: false,
      colors: [
        'Blue',
        'Indigo',
        'Purple',
        'Cyan',
        'Green',
        'Orange',
        'Grey'
      ],
      uid: null,
      programName: null,
      isCompleted: null,
      selectColors: 'Blue',
      workoutDay: null,
      workoutWeek: null,
      workoutDuration: null,
      CompletedDays: [],
      currentCompletedData: null
    }
  },
  props: {
    currentProgram: String,
    calendars: Array,
    workoutVideos: Array,
    month: String,
    totalWorkoutDays: Number,
    progress: Number
  },
  computed: {
    ...mapActions([
      'getUserData'
    ]),
    ...mapState([
      'userCalendar'
    ])
  },
  async mounted () {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.uid = firebase.auth().currentUser.uid
      }
    })
    this.programName = this.$route.params.id

    this.getCompletedDays()
  },
  methods: {
    // Show overlay
    showOverlay (videoIndex) {
      this.toggleStatus = false
      this.overlay = true
    },
    // Hide overlay
    hideOverlay () {
      this.overlay = false
    },
    // Get Completed Days function
    async getCompletedDays () {
      const CurrentWorkoutData = db.collection(this.uid).doc(this.programName)
      await CurrentWorkoutData.get().then((doc) => {
        const CompletedDays = doc.data().CompletedDays
        this.CompletedDays = CompletedDays
      })
    },
    // Get data from firebase
    async getWorkoutData (videoIndex, week, day) {
      this.currentWorkout = this.workoutVideos[videoIndex]
      this.workoutName = this.workoutVideos[videoIndex].name
      this.workoutDuration = this.workoutVideos[videoIndex].duration
      this.workoutDay = day
      this.workoutWeek = week

      // Get Completed Days from firestore
      this.getCompletedDays()
      this.isCompleted = (this.CompletedDays).includes(day)

      // Get Completed Days Details from firestore
      if (this.isCompleted) {
        const isCompletedData = this.userCalendar.filter(
          (calendar) => calendar.dayNum === day
        )
        const currentTimeComplete = isCompletedData[0].timeComplete
        const currentDateComplete = isCompletedData[0].dateComplete
        const currentCompletedData = new Date(`${currentDateComplete}T${currentTimeComplete}`).toLocaleString()
        this.currentCompletedData = currentCompletedData
      }
    },
    // Summit completed workout to firebase
    async summitWorkoutData () {
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      const yyyy = today.getFullYear()
      // Get curret date
      const currentDate = yyyy + '-' + mm + '-' + dd
      // Get current time
      const currentTime = today.toTimeString().split(' ')[0]
      // Get data
      const summitedData = {
        programName: this.currentProgram,
        workoutName: this.currentWorkout.name,
        workoutMonth: this.month,
        workoutWeek: this.workoutWeek,
        dayNum: this.workoutDay,
        duration: this.workoutDuration,
        color: this.selectColors.toLowerCase(),
        dateComplete: currentDate,
        timeComplete: currentTime
      }

      // Save data to firestore
      const dbProgramName = db.collection(this.uid).doc(this.programName)
      await dbProgramName.get().then((doc) => {
        this.CompletedDays.push(this.workoutDay)
        const remainDays = (this.CompletedDays.length / this.totalWorkoutDays)
        const updateProgress = Math.ceil(remainDays * 100)
        // Pass data to parent components
        bus.$emit('changeCompletedData', {
          progress: updateProgress,
          completedDays: this.CompletedDays.length,
          remainingDays: (this.totalWorkoutDays - this.CompletedDays.length)
        })
        dbProgramName.set({
          CompletedDays: this.CompletedDays,
          Progress: updateProgress
        }, { merge: true })
      })
      const dbCalendar = db.collection(this.uid).doc('userCalendar')
      await dbCalendar.get().then((doc) => {
        const Calendar = doc.data()
        if (Calendar === undefined) {
          const firstCalendar = []
          firstCalendar.push(summitedData)
          dbCalendar.set({
            userCalendar: firstCalendar
          }, { merge: true })
        } else {
          this.userCalendar.push(summitedData)
          dbCalendar.set({
            userCalendar: this.userCalendar
          }, { merge: true })
        }
      })
      this.$store.dispatch('getUserData', this.uid)
      this.hideOverlay()
      alert('Nice job you have completed Insanity day # 1 workout')
    }
  }
}
</script>
