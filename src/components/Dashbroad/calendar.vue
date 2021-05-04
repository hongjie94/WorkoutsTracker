<template>
  <v-app>
    <!-- Header -->
    <v-card class="theme--dark" style="border-radius: 0;">
      <v-card-text>
        <div class="display-3 font-weight-thin dashHeader">
        Calendar
        </div>
      </v-card-text>
    </v-card>
    <div class="theme--dark">  <!-- content-->
      <v-sheet
        dark
        tile
        class="sheet"
      >
      <v-btn
        icon
        class=" ma-2"
        @click="$refs.calendar.prev()"
        >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn outlined class="ma-3 dayBtn" @click="setToday">
            Today
      </v-btn>
      <v-toolbar-title class="ma-3 dayBox">{{ value }}</v-toolbar-title>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2 typeSelect"
        label="type"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2 weekdaySelect"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
      <v-icon>mdi-chevron-right</v-icon>
      </v-btn> <!-- Top Section-->
    </v-sheet>
    <v-sheet height="600" > <!-- Calendar Body-->
      <v-calendar
        dark
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        event-overlap-mode="stack"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @click:event="showEvent"
        @change="getEvents"
      ></v-calendar>
      <v-menu
          dark
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
          >
          <!-- Detail section -->
          <v-card
            max-width="400px"
            min-width="300px"
          >
          <v-toolbar
            :color="selectedEvent.color"
            dark
          >
            <v-icon class="mr-2">mdi-checkbox-multiple-marked-outline</v-icon>
            <v-toolbar-title
              style="font-weight: bolder;"
              v-html="`${selectedEvent.programName} - Day${selectedEvent.dayNum}`"
              >
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="completeText">
            <div class="calendarDetails" v-if="showCalendarDetails">
              <p class="textHeader" v-html="'Completed Workout Details'"></p>
              <p v-html="`Workout: ${selectedEvent.name}`"></p>
              <p v-html="`Date: ${calendarDate}`"></p>
              <p v-html="`Time: ${calendarTime}`"></p>
              <p v-html="`Duration: ${selectedEvent.duration} min`"></p>
            </div>
            <div class="updateColor" v-if="showColorPicker" @click="changeColor(selectedColors)">
               <p class="textHeader" v-html="'Color Picker'"></p>
                <v-color-picker
                  v-model="selectedColors"
                  flat
                ></v-color-picker>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              icon
              @click="toggleColorPicker"
              >
              <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
              <v-btn
              icon
              @click="deleteEvent(selectedEvent)"
              >
              <v-icon>mdi-trash-can-outline</v-icon>
             </v-btn>
            <v-spacer></v-spacer>
             <v-btn
                  dark
                  text
                  :disabled="(selectedEvent.color === ogColor) || !showColorPicker"
                  @click="upDateColor(selectedEvent)"
                >
                  Save
              </v-btn>
            <v-btn
              dark
              text
              @click="closeEvent"
            >
              Close
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
    </v-sheet>
    </div>
  </v-app>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
import { mapActions } from 'vuex'
import { bus } from '@/main'
export default {
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day', '4day'],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { text: 'Mon, Wed, Fri', value: [1, 3, 5] }
    ],
    selectedColors: '',
    eventColor: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    datetime: null,
    value: null,
    events: [],
    uid: null,
    calendarDate: null,
    calendarTime: null,
    showCalendarDetails: true,
    showColorPicker: false,
    ogColor: null
  }),
  props: {
    userCalendar: Array
  },
  methods: {
    getEvents () {
      const events = []
      if (this.userCalendar !== undefined) {
        return this.userCalendar.forEach(dbCalendar => {
          events.push({
            name: dbCalendar.workoutName,
            start: new Date(`${dbCalendar.dateComplete}T${dbCalendar.timeComplete}`),
            end: '',
            color: dbCalendar.color,
            timed: true,
            programName: dbCalendar.programName,
            duration: dbCalendar.duration,
            dayNum: dbCalendar.dayNum,
            submitDay: dbCalendar.currentDay
          })
          this.selectedEvent.color = dbCalendar.color
          this.calendarDate = dbCalendar.dateComplete
          this.calendarTime = new Date(`${dbCalendar.dateComplete}T${dbCalendar.timeComplete}`).toLocaleTimeString()
          this.events = events
        })
      }
      console.log('no data')
      this.events = events
    },
    async getCompletedDays (programName) {
      const CurrentWorkoutData = db.collection(this.uid).doc(programName)
      await CurrentWorkoutData.get().then((doc) => {
        return this.CompletedDays === doc.data().CompletedDays
      })
    },
    async showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedOpen = true
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    closeEvent () {
      if ((this.selectedEvent.color === this.ogColor) || this.showColorPicker === false) {
        this.showCalendarDetails = true
        this.showColorPicker = false
        this.selectedOpen = false
      } else {
        this.selectedEvent.color = this.ogColor
        this.showColorPicker = false
        this.showCalendarDetails = true
        this.selectedOpen = false
      }
    },
    toggleColorPicker () {
      this.ogColor = this.selectedEvent.color
      this.showCalendarDetails = !this.showCalendarDetails
      this.showColorPicker = !this.showColorPicker
    },
    changeColor (NewColor) {
      this.getEvents()
      this.selectedEvent.color = NewColor
    },
    getEventColor (event) {
      return event.color
    },
    async deleteEvent (event) {
      alert('deleteing this event will effect your progress and you record data!')

      // Deleted Completed Days
      const currentPorgramName = event.programName.replace(/\s/g, '')
      const CurrentWorkoutData = db.collection(this.uid).doc(currentPorgramName)
      await CurrentWorkoutData.get().then((doc) => {
        const CompletedDays = doc.data().CompletedDays
        const TotalWorkoutDays = doc.data().TotalWorkoutDays
        const deletedDay = CompletedDays.filter(
          (CompletedDay) => CompletedDay !== event.dayNum
        )

        // Update progress
        const remainDays = (deletedDay.length / TotalWorkoutDays)
        const updateProgress = Math.ceil(remainDays * 100)
        console.log('"updateProgress is : "' + updateProgress)

        // Pass data to parent components
        bus.$emit('changeCompletedData', {
          progress: updateProgress,
          completedDays: deletedDay.length,
          remainingDays: remainDays
        })

        // Update data form firbase
        CurrentWorkoutData.set({
          CompletedDays: deletedDay,
          Progress: updateProgress
        }, { merge: true })
      })

      // Get index of the array from firebase
      const fbUserCalendar = db.collection(this.uid).doc('userCalendar')
      const index = this.userCalendar.findIndex(function (userCalendar) {
        return userCalendar.currentDay === event.submitDay
      })

      // Delete selected array
      this.userCalendar.splice(index, 1)

      // Update firestore
      await fbUserCalendar.set({
        userCalendar: this.userCalendar
      }, { merge: true })

      // Update Current data
      this.getEvents()

      // Update vuex store
      this.$store.dispatch('getUserData', this.uid)
      this.selectedOpen = false
      alert('Event susscfully remove fom canlendar')
    },
    async upDateColor (event) {
      // Update current color
      this.ogColor = this.selectedColors
      this.selectedEvent.color = this.selectedColors
      let index
      // Get the Index of the Array
      if (this.userCalendar.length === 1) {
        index = this.userCalendar.length - 1
      } else {
        index = this.userCalendar.findIndex(function (userCalendar) {
          return userCalendar.currentDay === event.submitDay
        })
      }

      // Update then color from array
      this.userCalendar[index].color = this.selectedColors

      // Save data to firebase
      const dbCalendar = db.collection(this.uid).doc('userCalendar')
      await dbCalendar.set({
        userCalendar: this.userCalendar
      }, { merge: true })
      this.$store.dispatch('getUserData', this.uid)
      this.getEvents()
      this.selectedOpen = false
      alert('color update complete')
    },
    setToday () {
      this.value = new Date().toString().split(' ').splice(0, 4).join(' ')
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
        this.uid = firebase.auth().currentUser.uid
      }
      this.$store.dispatch('getUserData', this.uid)
    })
    this.value = new Date().toString().split(' ').splice(0, 4).join(' ')
  }
}
</script>
