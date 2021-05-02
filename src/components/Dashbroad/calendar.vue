<template>
  <v-app>
    <v-card class="theme--dark" style="border-radius: 0;">
      <v-card-text>
        <div class="display-3 font-weight-thin dashHeader">
        Calendar
        </div>
      </v-card-text>
    </v-card>
    <div class="theme--dark">
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
      </v-btn>
    </v-sheet>
    <v-sheet height="600" >
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
          <!-- detail section -->
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
            <p class="textHeader" v-html="'Completed Workout Details'"></p>
            <p v-html="`Workout: ${selectedEvent.name}`"></p>
             <p v-html="`Date: ${calendarDate}`"></p>
             <p v-html="`Time: ${calendarTime}`"></p>
             <p v-html="`Duration: ${selectedEvent.duration} min`"></p>
             <!-- <span v-html="selectedEvent.start"></span>
              <span v-html="selectedEvent.start"></span>
               <span v-html="selectedEvent.start"></span> -->
          </v-card-text>
          <v-card-actions>
            <v-btn
              icon
              >
              <v-icon>mdi-invert-colors</v-icon>
            </v-btn>
              <v-btn
              icon
              >
              <v-icon>mdi-trash-can-outline</v-icon>
             </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              dark
              text
              @click="selectedOpen = false"
            >
              Close
            </v-btn>
            </v-card-actions>
          </v-card>
          </v-menu>
    </v-sheet>
    </div>
    <v-card class="theme--dark" style="border-radius: 0;">
      <v-card-text>
        <div class="display-1 font-weight-thin calendarHead">
        {{datetime}}
        </div>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import db from '@/components/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'
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
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    datetime: null,
    value: null,
    events: [],
    uid: null,
    calendarDate: null,
    calendarTime: null
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
            dayNum: dbCalendar.dayNum
          })
          this.calendarDate = dbCalendar.dateComplete
          this.calendarTime = new Date(`${dbCalendar.dateComplete}T${dbCalendar.timeComplete}`).toLocaleTimeString()
          this.events = events
        })
      }
      console.log('no data')
      this.events = events
      // this.test = new Date().toTimeString().split(' ')[0]
    },
    getEventColor (event) {
      return event.color
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
    async deleteEvent (event) {
      await db.collection('calEvent').doc(event).delete()
      this.selectedOpen = false
      this.getEvents()
    },
    setToday () {
      this.value = new Date().toString().split(' ').splice(0, 4).join(' ')
    }
  },
  mounted () {
    // Get user id form firbase
    firebase.auth().onAuthStateChanged(user => {
      this.uid = firebase.auth().currentUser.uid
    })

    this.value = new Date().toString().split(' ').splice(0, 4).join(' ')
  }
}
</script>
