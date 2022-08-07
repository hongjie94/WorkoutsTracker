<template>
  <div class="container Month-Calendar">
      <div class="container">
          <div class="row month-rows">
              <div class="col-12 month">
                  <h4>{{header.toUpperCase()}}</h4>
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
          <div class="row week-rows" :key="index" v-for="(calendar, index) in calendars">
            <div class="col-1 allweeks"
              :class="{ noborder: calendar.week === lastWeeks }">
              <div class="weeks">
                <span>WEEK</span>
                <h1>{{calendar.week}}</h1>
                <b v-if="calendar.phase">Phase- {{calendar.phase}}</b>
                <b v-if="calendar.detail">{{calendar.detail}}</b>
              </div>
            </div>
              <div
                class="col week1 week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.mon.day)}"
                @click="getWorkoutData(
                  (calendar.mon.videoIndex),
                  (calendar.mon.workout),
                  (calendar.week),
                  (calendar.mon.day),
                  (calendar.mon.videoIndex2),
                  (calendar.mon.workout2)
                  )"
              >
              {{calendar.mon.videoIndex2}}
                <p
                  @click="showOverlay(calendar.mon.day)">
                  {{calendar.mon.workout}}
                </p>

                <p @click="showOverlay(calendar.mon.day)"
                  v-if="calendar.mon.workout2">
                  + {{calendar.mon.workout2}}
                </p>
              </div>
              <div
                class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.tue.day)}"
                @click="getWorkoutData(
                  (calendar.tue.videoIndex),
                  (calendar.tue.workout),
                  (calendar.week),
                  (calendar.tue.day),
                  (calendar.tue.videoIndex2),
                  (calendar.tue.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.tue.day)">
                  {{calendar.tue.workout}}
                </p>
                 <p @click="showOverlay(calendar.tue.day)"
                  v-if="calendar.tue.workout2">
                  + {{calendar.tue.workout2}}
                 </p>
              </div>
              <div
                class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.wed.day)}"
                @click="getWorkoutData(
                  (calendar.wed.videoIndex),
                  (calendar.wed.workout),
                  (calendar.week),
                  (calendar.wed.day),
                  (calendar.wed.videoIndex2),
                  (calendar.wed.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.wed.day)">
                  {{calendar.wed.workout}}
                </p>
                 <p @click="showOverlay(calendar.wed.day)"
                  v-if="calendar.wed.workout2">
                  + {{calendar.wed.workout2}}
                 </p>
              </div>
              <div
                class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.thu.day)}"
                @click="getWorkoutData(
                  (calendar.thu.videoIndex),
                  (calendar.thu.workout),
                  (calendar.week),
                  (calendar.thu.day),
                  (calendar.thu.videoIndex2),
                  (calendar.thu.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.thu.day)">
                  {{calendar.thu.workout}}
                </p>
                 <p @click="showOverlay(calendar.thu.day)"
                  v-if="calendar.thu.workout2">
                  + {{calendar.thu.workout2}}
                 </p>
              </div>
              <div
                class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.fri.day)}"
                @click="getWorkoutData(
                  (calendar.fri.videoIndex),
                  (calendar.fri.workout),
                  (calendar.week),
                  (calendar.fri.day),
                  (calendar.fri.videoIndex2),
                  (calendar.fri.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.fri.day)">
                  {{calendar.fri.workout}}
                </p>
                <p @click="showOverlay(calendar.fri.day)"
                  v-if="calendar.fri.workout2">
                  + {{calendar.fri.workout2}}
                </p>
              </div>
              <div
                class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.sat.day)}"
                @click="getWorkoutData(
                  (calendar.sat.videoIndex),
                  (calendar.sat.workout),
                  (calendar.week),
                  (calendar.sat.day),
                  (calendar.sat.videoIndex2),
                  (calendar.sat.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.sat.day)"
                  v-if="currentProgram === 'Insanity Max 30' & calendar.sat.workout === 'REST'"
                  class="rest">
                  {{calendar.sat.workout}}
                </p>
                <p
                  @click="showOverlay(calendar.sat.day)"
                  v-if="currentProgram === 'Insanity Max 30' & calendar.sat.workout === 'REST' "
                  class="pluse rest">PULSE
                </p>
                 <p
                  @click="showOverlay(calendar.sat.day)"
                  v-if="currentProgram === 'Insanity Max 30' & calendar.sat.workout !== 'REST' ">
                  {{calendar.sat.workout}}
                </p>
                <p
                  @click="showOverlay(calendar.sat.day)"
                  v-if="currentProgram !== 'Insanity Max 30' ">
                  {{calendar.sat.workout}}
                </p>
                <p @click="showOverlay(calendar.sat.day)"
                  v-if="calendar.sat.workout2">
                  + {{calendar.sat.workout2}}
                </p>
              </div>
              <div class="col week-workouts"
                :class="{isCompleted : CompletedDays.includes(calendar.sun.day)}"
                @click="getWorkoutData(
                  (calendar.sun.videoIndex),
                  (calendar.sun.workout),
                  (calendar.week),
                  (calendar.sun.day),
                  (calendar.sun.videoIndex2),
                  (calendar.sun.workout2)
                )"
              >
                <p
                  @click="showOverlay(calendar.sun.day)">
                  {{calendar.sun.workout}}
                </p>
                 <p @click="showOverlay(calendar.sun.day)"
                  v-if="calendar.sun.workout2">
                  + {{calendar.sun.workout2}}
                </p>
              </div>
          </div>
          <v-row justify="center">
          <transition  appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <v-overlay
              class="calendarOverlay"
              :value="overlay"
              v-if="overlay && workoutName"
              >
            <div class="topheader">
              <div v-if="workoutName2"> Day # {{workoutDay}} - {{workoutName}}</div>
              <div v-if="workoutName2 === null"> Day # {{workoutDay}} - {{workoutName}}</div>
              <v-btn @click="hideOverlay" icon dark class="closeBtn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="calendarFrame"
              v-if="(workoutName !== 'REST') && (!workoutName2)"
              >
                <div class="calendarDownload">
                  <div class="icon_div">
                  </div>
                </div>
              <iframe
              class="calendarOverlay-iframe"
              :src="workoutVideo"
              allowfullscreen
              />
            </div>

            <div class="calendarFrame-2workouts" v-if="(workoutName2)">
              <div class="calendarFrame-w1">
                <div class="calendarDownload-w1">
                  <div class="icon_div">
                    <div class="dl_icon">
                    </div>
                  </div>
                </div>
              <iframe
              class="calendarOverlay-iframe"
              :src="workoutVideo"
              allowfullscreen
              />
            </div>
            <div class="calendarFrame-w2">
                <div class="calendarDownload-w2">
                  <div class="icon_div">
                    <div class="dl_icon">
                    </div>
                  </div>
                </div>
              <iframe
              class="calendarOverlay-iframe"
              :src="workoutVideo2"
              allowfullscreen
              />
            </div>
            </div>

            <div v-if="workoutName === 'REST'">
              <v-img max-width="31em" src="./Rest.jpeg" />
            </div>
              <v-app>
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  :color="selectColors.toLowerCase()"
                >
                </v-progress-linear>
              </v-app>
            <div class="calendarOverlay-bottom" v-if="!isCompleted">
              <v-app class="calendarOverlay-bg switch">
                <v-switch
                  v-model="toggleStatus"
                  label="Complete"
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
               :disabled="!toggleStatus || loading"
               >summit
              </v-btn>
            </div>
            <div class="calendarOverlay-bottom_complete" v-if="isCompleted">
                <p> <v-icon class="checkCircle">mdi-check-circle</v-icon>Workout Completed </p>
                <p>{{currentCompletedData}}</p>
                <!-- {{calendars}} -->
            </div>
          </v-overlay>
           </transition>
          </v-row>
      </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import { bus } from '@/main'
import firebase from 'firebase/app'
import db from '@/components/firebaseInit'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CurrentWorkout',
  data () {
    return {
      toggleStatus: false,
      overlay: false,
      loading: false,
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
      workoutDuration2: null,
      CompletedDays: [],
      currentWorkout: {},
      currentCompletedData: null,
      workoutName: null,
      workoutName2: null,
      workoutDl: null,
      workoutDl2: null,
      workoutVideo: null,
      workoutVideo2: null
    }
  },
  props: {
    currentProgram: String,
    calendars: Array,
    workoutVideos: [Object, Array],
    header: String,
    totalWorkoutDays: Number,
    progress: Number,
    lastWeeks: Number
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
      this.$store.dispatch('getUserData', this.uid)
    })
    this.programName = this.$route.params.id
    this.getCompletedDays()
  },
  watch: {
    loading (val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    }
  },
  methods: {
    test () {
      console.log(this.calendars)
      console.log(this.currentProgram)
    },
    // Show overlay
    showOverlay (day) {
      this.workoutDay = day
      // alert(this.workoutDay)
      this.toggleStatus = false
      this.overlay = true
    },
    // Hide overlay (clear datas)
    hideOverlay () {
      this.overlay = false
      this.currentWorkout = null
      this.workoutName = null
      this.workoutDuration = null
      this.workoutName2 = null
      this.currentWorkout2 = null
      this.workoutWeek = null
      this.workoutDl = null
      this.workoutDl2 = null
      this.workoutVideo = null
      this.workoutVideo2 = null
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
    getWorkoutData  (videoIndex, workoutName, week, day, videoIndex2, workoutName2) {
      // on rest day and complete day
      if (videoIndex === 'REST' || videoIndex === 'NONE') {
        // alert('REST or COMPLETE, NONE')
        this.workoutDay = day
        this.workoutWeek = week
        videoIndex === 'REST' ? this.workoutName = 'REST' : this.workoutName = 'NONE'
        this.workoutName2 = null
        this.workoutVideo = null
        this.workoutVideo2 = null
        this.workoutDuration = 0
        this.workoutDuration2 = null
        this.workoutDl = null
        this.workoutDl2 = null
      } else if (workoutName2) { // if there is 2 workouts in a day
        // alert('workoutName2')
        this.workoutVideo = this.workoutVideos[videoIndex].url
        this.workoutVideo2 = this.workoutVideos[videoIndex2].url
        this.workoutName = `${workoutName} + ${workoutName2}`
        this.workoutName2 = workoutName2
        this.workoutDuration = (this.workoutVideos[videoIndex].duration) + (this.workoutVideos[videoIndex2].duration)
        this.workoutDuration2 = this.workoutVideos[videoIndex2].duration
        this.workoutDay = day
        this.workoutWeek = week
        this.workoutDl = this.workoutVideos[videoIndex].downloadLinks
        this.workoutDl2 = this.workoutVideos[videoIndex2].downloadLinks
      } else { // regular workout days
        // alert('regular')
        this.currentWorkout = this.workoutVideos[videoIndex]
        this.workoutName = workoutName
        this.workoutDuration = this.workoutVideos[videoIndex].duration
        this.workoutDuration2 = null
        this.workoutName2 = null
        this.currentWorkout2 = null
        this.workoutDay = day
        this.workoutWeek = week
        this.workoutDl = this.workoutVideos[videoIndex].downloadLinks
        this.workoutDl2 = null
        this.workoutVideo = this.workoutVideos[videoIndex].url
        this.workoutVideo2 = null
        // alert('day' + day + 'or' + this.workoutDay)
      }
      // Get Completed Days and check if current day is completed
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
      if (!this.workoutName) {
        this.workoutName = 'REST'
      }
      this.loading = true
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      const yyyy = today.getFullYear()
      // Get curret date
      const currentDate = yyyy + '-' + mm + '-' + dd
      // Get current time
      const currentTime = today.toTimeString().split(' ')[0]
      // Get data
      const submitedData = {
        programName: this.currentProgram,
        workoutName: this.workoutName,
        workoutWeek: this.workoutWeek,
        dayNum: this.workoutDay,
        duration: this.workoutDuration,
        color: this.selectColors.toLowerCase(),
        dateComplete: currentDate,
        timeComplete: currentTime,
        currentDay: today.toLocaleString()
      }
      const dbCalendar = db.collection(this.uid).doc('userCalendar')
      await dbCalendar.get().then((doc) => {
        const fsUserCalendar = doc.data().userCalendar
        if (fsUserCalendar) {
          this.userCalendar.push(submitedData)
          return dbCalendar.set({
            userCalendar: this.userCalendar
          }, { merge: true })
        } else {
          const firstData = []
          firstData.push(submitedData)
          return dbCalendar.set({
            userCalendar: firstData
          })
        }
      })
      // Save data to firestore
      const dbProgramName = db.collection(this.uid).doc(this.programName)
      await dbProgramName.get().then((doc) => {
        if (doc.data().CompletedDays !== undefined || null) {
          this.CompletedDays = doc.data().CompletedDays
          this.CompletedDays.push(this.workoutDay)
        } else {
          this.CompletedDays = [this.workoutDay]
        }
        const remainDays = (this.CompletedDays.length / this.totalWorkoutDays)
        const updateProgress = Math.ceil(remainDays * 100)

        // Workout is completed save the completed date to firestore
        if (updateProgress === 100) {
          dbProgramName.set({
            WorkoutCompleted: new Date()
          }, { merge: true })
        }
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
      this.$store.dispatch('getUserData', this.uid)
      swal(`Day #${this.workoutDay} Completed !`, `Nice job! you have completed ${this.currentProgram} Day ${this.workoutDay} (${this.workoutName}).`, {
        icon: 'success'
      })
      this.hideOverlay()
    }
  }
}
</script>
