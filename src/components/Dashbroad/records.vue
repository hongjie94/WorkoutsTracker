
<template>
  <v-app style="margin: 0px; border-radius: 0px;">
    <v-card class="theme--dark" style="border-radius: 0;">
        <v-card-text>
          <div class="display-3 font-weight-thin dashHeader">
          Records
          </div>
        </v-card-text>
      </v-card>
    <v-data-table
      style=" border-radius: 0;"
      dark
      :headers="headers"
      :items="workoutsData"
      :items-per-page="5"
      item-key="dayNum"
      class="elevation-1"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus'
      }"
    />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      currentTime: '',
      headers: [
        {
          text: 'Date',
          align: 'start',
          value: 'date'
        },
        { text: 'Time', value: 'time' },
        { text: 'Program Name', value: 'name' },
        { text: 'Day Number', value: 'dayNum' },
        { text: 'Workout Name', value: 'workout' },
        { text: 'Duration', value: 'duration' }
      ],
      workoutsData: []
    }
  },
  props: {
    userCalendar: Array
  },
  mounted () {
    const workoutsData = []
    if (this.userCalendar !== undefined) {
      return this.userCalendar.forEach(dbCalendar => {
        const completedTime = new Date(`${dbCalendar.dateComplete}T${dbCalendar.timeComplete}`).toLocaleTimeString()
        const completedDate = new Date(`${dbCalendar.dateComplete}T${dbCalendar.timeComplete}`).toLocaleDateString()
        workoutsData.push({
          date: completedDate,
          time: completedTime,
          workout: dbCalendar.workoutName,
          dayNum: (`Day ${dbCalendar.dayNum}`),
          duration: (`${dbCalendar.duration} min`),
          name: dbCalendar.programName
        })
        this.workoutsData = workoutsData
      })
    }
    console.log('no data')
    this.workoutsData = workoutsData
  }
}
</script>
<style>
</style>
