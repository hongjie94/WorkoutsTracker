<template>
  <div class="memberships" id="memberships">
      <h1>Take Your Training To New Heights</h1>
      <h3>
        Stay on track of your goals, discover new workouts and see yourself improve.
      </h3>
    <div class="membership__wrapper">
        <div class="membership__card"
          :key="Card.index"
          v-for="Card in CardDatas"
          @mouseenter="showWorkout(Card.catagory)"
          @mouseleave="showCover"
          @click="toWorkoutPage"
        >
          <transition appear enter-active-class="animated fadeIn">
            <img
              class="cover"
              :src="Card.img"
              alt="not-found"
              v-if="hovered !== Card.catagory"
            >
          </transition>
          <transition appear enter-active-class="animated flipInY">
            <div class="workout_benifits" v-if="hovered === Card.catagory">
                <h2>{{Card.title}}</h2>
              <ul>
                <li :key="benifits.index" v-for="benifits in Card.benifits">
                  {{benifits}}
                </li>
              </ul>
            </div>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      t: null,
      showImg: false,
      hovered: null,
      showText: false,
      CardDatas: [
        {
          catagory: 'Cardio',
          img: require('./img/cardio.jpg'),
          title: 'Cardio Exercise',
          benifits: {
            a: 'Strengthen your heart and muscles.',
            b: 'Burn calories.',
            c: 'Help control your appetite.',
            d: 'Help you sleep better at night.',
            e: 'Reduce arthritis pain and stiffness through joint movement.',
            f: 'Help prevent or manage high blood pressure, heart disease and diabetes.'
          }
        },
        {
          catagory: 'Strength',
          img: require('./img/strength.jpg'),
          title: 'Strength & Endurance',
          benifits: {
            a: 'Reduce the risk of injury.',
            b: 'Help you keep a healthy body weight.',
            c: 'Lead to healthier, stronger muscles and bones.',
            d: 'Improve confidence and how you feel about yourself.',
            e: 'Give you a sense of accomplishment.',
            f: 'Allow you to add new and different activities to your exercise program.'
          }
        },
        {
          catagory: 'Yoga',
          img: require('./img/yoga.jpg'),
          title: 'Yoga & Meditation',
          benifits: {
            a: 'Increased flexibility.',
            b: 'Increased muscle strength and tone.',
            c: 'Improved respiration, energy and vitality.',
            d: 'Maintaining a balanced metabolism.',
            e: 'Weight reduction.',
            f: 'Cardio and circulatory health.',
            g: 'Improved athletic performance.',
            h: 'Protection from injury.'
          }
        }
      ]
    }
  },
  methods: {
    toWorkoutPage () {
      this.$router.replace({ name: 'Workouts' })
    },
    showWorkout (catagory) {
      this.t = setTimeout(() => {
        this.hovered = catagory
      }, 200)
    },
    showCover () {
      clearTimeout(this.t)
      setTimeout(() => {
        this.hovered = null
      }, 200)
    }
  }
}
</script>
