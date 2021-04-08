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
      height="55"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn  dark class="ma-3" @click.stop="dialog = true">
            New Event
      </v-btn>
       <v-btn outlined class="ma-3" @click="setToday">
            Today
      </v-btn>
      <v-toolbar-title class="ma-3">{{ value }}</v-toolbar-title>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
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
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
          >
            <v-card
              max-width="400px"
              min-width="300px"
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.name"></span>
                 <span v-html="selectedEvent.color"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
    </v-sheet>
    </div>
    <v-card class="theme--dark" style="border-radius: 0;">
      <v-card-text>
        <div class="display-1 font-weight-thin calendarHead">
        {{datetime}} {{today}}
        {{events}}
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
    datetime: '',
    today: '',
    value: '',
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    start: null,
    end: null,
    uid: null
  }),
  methods: {
    // getEvents ({ start, end }) {
    //   const events = []
    //   // const min = new Date(`${start.date}T00:00:00`)
    //   // this.test.a = min
    //   // this.test.b = start.date
    //   // // const max = new Date(`${end.date}T23:59:59`)
    //   // this.test.c = (new Date()).toString().split(' ').splice(1, 3).join(' ')
    //   // this.test.d = end.date
    //   // this.test.e = new Date().toISOString().slice(0, 10)
    //   const Hours = new Date().getHours()
    //   const Minutes = new Date().getMinutes()
    //   const Seconds = new Date().getSeconds()
    //   this.hours = Hours
    //   this.min = Minutes
    //   this.s = Seconds
    //   // const days = (max.getTime() - min.getTime()) / 86400000
    //   // const eventCount = this.rnd(days, days + 20)

    //   // for (let i = 0; i < eventCount; i++) {
    //   // const allDay = this.rnd(0, 3) === 0
    //   // const firstTimestamp = this.rnd(min.getTime(), max.getTime())
    //   // const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    //   // const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
    //   // const second = new Date(first.getTime() + secondTimestamp)
    //   // const today = new Date()
    //   const testday = '2021-04-04'
    //   const time = 'T22:06:05'
    //   events.push({
    //     name: 'cardio',
    //     start: new Date(`${testday + time}`),
    //     end: '',
    //     color: this.colors[this.rnd(0, this.colors.length - 1)],
    //     timed: true
    //   })
    //   // }
    async getEvents () {
      const snapshot = await db.collection('Calendar_' + this.uid).get()
      const events = []
      snapshot.forEach(doc => {
        const eventData = doc.data()
        console.log(eventData)
        eventData.id = doc.id
        console.log(eventData.id)
        events.push({
          name: eventData.name, // name
          start: new Date(`${eventData.start}T00:30:00`), // date $ time
          end: '',
          color: eventData.color, // color
          timed: true
        })
      })
      // events.push({
      //   name: 'cardio',
      //   start: new Date(),
      //   end: '',
      //   color: this.colors[this.rnd(0, this.colors.length - 1)],
      //   timed: true
      // })
      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen === true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    async updateEvent (event) {
      await db.collection('calEvent').doc(this.currentlyEditing).update({
        details: event.details
      })
      this.selectedOpen = false
      this.currentlyEditing = null
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

    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()

    this.today = today = mm + '/' + dd + '/' + yyyy
    // new Date().getHours() + ':' +
    // new Date().getMinutes() + ':' +
    // new Date().getSeconds()
    this.value = new Date().toString().split(' ').splice(0, 4).join(' ')
  }
}
</script>
<style>
.dashHeader{
  padding: .5em !important;
}
</style>
