<template>

  <div class="workout">
    <!-- <div class="workout-cards">
    <v-card :key="workout.index" v-for="workout in workouts" class="v-c" max-width="245">
      <p>{{workout.maxOutAbs}}</p> -->
      <!-- <a :href="`${workout.maxOutAbs}`">Click for download</a> -->
      <!-- <br> <iframe id="lbry-iframe" width="560" height="315" :src="`${workout.maxOutAbs}`" allowfullscreen></iframe> -->
      <!-- <p :key="month1.index" v-for="month1 in workout.month1Calendar">{{month1.week1}}</p>
        <router-link :to="`/workouts/${workout.route}`">
        <v-img :src="require('@/components/Workouts/' + workout.imageURL)" class="max30" height="auto" />
        </router-link>
        <div :class="{wks:showProgress}">Unlock for $ 4.99</div>
    </v-card>
    </div> -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 10px">
      <div class="container cards">
      <div class="row">
      <v-card :key="workout.index" v-for="workout in workouts"  class="card_theme">
        <v-img :src="require('@/components/Workouts/' + workout.imageURL)" />
        <v-card-title>
          {{workout.name}}
        </v-card-title>
      <v-card-subtitle class="price">
          $ {{workout.price}}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="lighten-2" text>
            Unlock
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon  @click="toggle(workout.id)" >
            <v-icon>{{ isActive === workout.id ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
          <v-expand-transition>
          <div v-show="isActive === workout.id">
            <v-divider></v-divider>
            <v-card-text style="text-align: initial;">
              <b>Includes:</b>
              <li :key='include.index' v-for="include in workout.includes">{{include}}</li>
              <hr style="background-color: white">
              <b :key='equipment.index' v-for="equipment in workout.equipments">{{equipment}}</b>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Workout',
  props: ['item'],
  data () {
    return {
      isActive: ''
    }
  },
  methods: {
    toggle (id) {
      if (this.isActive === id) {
        this.isActive = ''
      } else if (this.isActive !== id) {
        this.isActive = id
      }
    }
  },
  computed: {
    ...mapState([
      'workouts'
    ])
  }
}
</script>
