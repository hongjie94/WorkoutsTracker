<template>
  <div class="memberships">
        <h1>Take Your Training To New Heights</h1>
          <h3>
            Stay on track of your goals, discover new workouts and see yourself improve.
          </h3>
        <div class="membership__wrapper">
          <div class="membership__card" @click="showWorkout('Cardio')" @mouseleave="showCover">
            <!-- <div class="membership__title" v-if="hovered !== 'Cardio'">
              <i class="mdi mdi-run-fast cadio-icon"></i>
            </div> -->
              <img class="cover"
                src="./img/cardio.jpg"
                alt="not-found"
                v-if="hovered !== 'Cardio'"
              >
          </div>
          <div class="membership__card" @click="showWorkout('Strength')" @mouseleave="showCover">
            <!-- <div class="membership__title" v-if="hovered !== 'Strength'">
              <i class="mdi mdi-dumbbell mdi-rotate-90 strength-icon"></i>
            </div> -->
            <img
              class="cover"
              src="./img/strength.jpg"
              alt="not-found"
              v-if="hovered !== 'Strength'"
            >
        </div>
        <div class="membership__card" @click="showWorkout('Yoga')" @mouseleave="showCover" >
          <!-- <div class="membership__title" v-if="hovered !== 'Yoga'">
            <i class="mdi mdi-yoga yoga-icon"></i>
          </div> -->
            <img class="cover"
              src="./img/yoga.jpg"
              alt="not found"
              v-if="hovered !== 'Yoga'"
            >
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      hovered: null
    }
  },
  methods: {
    showWorkout (catagory) {
      this.hovered = catagory
      // console.log('hovered')
    },
    showCover () {
      this.hovered = false
    }
  },
  computed: {
    ...mapGetters([
      'CardioWorkouts',
      'MuscleWorkouts',
      'YogaWorkouts'
    ]),
    ...mapState([
      'workouts'
    ])
  }
}
</script>
