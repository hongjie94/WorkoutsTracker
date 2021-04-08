
<template>
<v-app style="margin: 0px; border-radius: 0px;">
  <v-card class="theme--dark" style="border-radius: 0;">
      <v-card-text>
        <div class="display-3 font-weight-thin dashHeader">
        Records {{currentTime}}
        </div>
      </v-card-text>
    </v-card>
  <v-data-table
    style=" border-radius: 0;"
    dark
    :headers="headers"
    :items="workoutsData"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>
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
        { text: 'Workout', value: 'name' },
        { text: 'Duration', value: 'duration' },
        { text: 'Progress', value: 'progress' }
      ],
      workoutsData: [
        {
          date: 'Apr, 12, 2021',
          time: 'Jan, 15, 2021',
          name: 'Max out cardio',
          duration: '32min',
          progress: 'Insanity Max30 (30/60 Days)'
        },
        {
          date: new Date().toString().split(' ').splice(0, 4).join(' '),
          name: 'Max out power',
          duration: '32min',
          time: new Date().toString().split(' ').splice(4, 5).join(' ')
        },
        {
          name: 'Cupcake 3',
          duration: 'DAY 3',
          time: new Date()
        },
        {
          name: 'Cupcake',
          category: 'Pastry'
        }
      ]
    }
  },
  mounted () {
    const Hours = new Date().getHours()
    const Minutes = new Date().getMinutes()
    const Seconds = new Date().getSeconds()
    if (Hours > 12) {
      const Hours12 = new Date().getHours() - 12
      this.currentTime = '0' + Hours12 + ':' + Minutes + ':' + Seconds + ' PM'
      this.workoutsData[1].time = '0' + Hours12 + ':' + Minutes + ':' + Seconds + ' PM'
    } else if (Hours < 12) {
      const Hours = new Date().getHours()
      this.currentTime = Hours + ':' + Minutes + ':' + Seconds + ' AM'
    }
  }
}
</script>
<style>
</style>
