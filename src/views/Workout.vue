<template>
  <div class="workout">
    <div class="workout-cards">
      <v-card class="v-c" max-width="270" v-show="collapsetransition">
        <router-link to="/workouts/InsaityMax30">
        <v-img @mouseout="notShow" @mouseover="show" src="../components/Workouts/InsanityMax30/img/InsanityMax30.jpg" class="max30" height="auto"></v-img>
        </router-link>
        <div v-show="showing" :class="{wks:showing}">Progress: 45%</div>
      </v-card>
       <v-card class="v-c" max-width="270">
        <router-link to="/workouts/InsaityMax30">
        <v-img @mouseout="notShow" @mouseover="show" src="../components/Workouts/InsanityMax30/img/InsanityMax30.jpg" class="max30" height="auto"></v-img>
        </router-link>
        <div v-show="showing" :class="{wks:showing}">Progress: 45%</div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workout',
  data () {
    return {
      showing: false,
      collapsetransition: true
    }
  },
  methods: {
    show: function () {
      if (this.showing === false) {
        this.showing = true
      }
    },
    notShow: function () {
      if (this.showing === true) {
        this.showing = false
      }
    }
  }
}
</script>
