<template>
  <div class="Month-Calender">
      <div class="container">
          <div class="row">
              <div class="col-12 title">
                  <h4></h4>
              </div>
          </div>
          <div class="row date-rows">
              <div class="col-12 month">
                  <h4>MONTH 1</h4>
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
          <div class="row week-rows" :key="calendar.index" v-for="calendar in max30Month1Calendar">
              <div class="col-1 allweeks" :class="{noborder:calendar.week ==='4' }"><div class="weeks"><span>WEEK</span><h1>{{calendar.week}}</h1></div></div>
                <div class="col week1 week-workouts">
                  <div v-if="calendar.status ==='week1'" class="firstWeek"><p>Take your "Day 1"</p><p>pic & stats</p></div>
                  <p>{{calendar.mon}}</p>
                </div>
                <div class="col week-workouts">
                  <p>{{calendar.tue}}</p>
                </div>
                <div class="col week-workouts">
                  <p>{{calendar.wed}}</p>
                </div>
                <div class="col week-workouts">
                  <p>{{calendar.thu}}</p>
                </div>
                <div class="col week-workouts">
                  <p>{{calendar.fri}}</p>
                </div>
                <div class="col week-workouts">
                    <p class="rest">REST</p>
                  <p class="pluse">PULSE</p>
                  <!-- <p>{{calendar.sat}}</p> -->
                </div>
                <div class="col week-workouts">
                  <p  v-if="calendar.status !=='week4'">
                    {{calendar.sun}}
                  </p>
                  <div v-if="calendar.status ==='week4'">
                      <p>REST</p>
                      <div class="lastWeek">
                        <p>Take your "Day 30"</p>
                        <p>pic & stats</p>
                      </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      max30Month1Calendar: ''
    }
  },
  mounted () {
    axios
      .get('https://workoutstracker-default-rtdb.firebaseio.com/InsanityMax30.json')
      .then(response => (this.max30Month1Calendar = response.data.Month1Calendar))
  }
}
</script>
<style scoped>

</style>
