<template>
  <div class="dashbroad">
  <v-card dark color="dashbroad-header">
    <v-tabs
      dark
      v-model="tab"
      background-color="transparent"
      color="dashbroad-header"
      grow
      >
      <v-tab
        v-for="section in sections"
        :key="section"
      >
      {{ section }}
      </v-tab>
    </v-tabs>
     <v-tabs-items class="darkBg" v-model="tab">
      <v-tab-item v-for="(selection, i) in selections" :key="i">
        <v-card color="basil" flat v-if="tab === 0">
          <UnlockedWorkouts
            id="calendar"
            v-if="selection === 'Workouts'"
            :unlockedWorkouts ='unlockedWorkouts'
            :uid = "uid"
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs-items  class="darkBg" v-model="tab">
      <v-tab-item v-for="(selection, i) in selections" :key="i">
        <v-card color="basil" flat v-if="tab === 1"  >
          <Calendar
            id="calendar"
            v-if="selection === 'Calendar'"
            :userCalendar = 'userCalendar'
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs-items  class="darkBg" v-model="tab">
      <v-tab-item v-for="(selection, i) in selections" :key="i">
        <v-card color="basil" flat v-if="tab === 2">
          <Records
            id="records"
            v-if="selection === 'Records'"
            :userCalendar = 'userCalendar'
          />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>

<script>
import UnlockedWorkouts from '@/components/Dashbroad/UnlockedWorkouts/unlockedWorkouts.vue'
import Calendar from '@/components/Dashbroad/calendar.vue'
import Records from '@/components/Dashbroad/records.vue'
import { mapState, mapActions } from 'vuex'
import firebase from 'firebase/app'
export default {
  name: 'Home',
  components: {
    UnlockedWorkouts,
    Calendar,
    Records
  },
  data () {
    return {
      date: '',
      time: '',
      context: '',
      tab: null,
      uid: null,
      sections: [
        'Workouts', 'Calendar', 'Records'
      ],
      selections: [
        'Workouts', 'Calendar', 'Records'
      ]
    }
  },
  computed: {
    ...mapState([
      'unlockedWorkouts',
      'userCalendar'
    ]),
    ...mapActions([
      'getUserData'
    ])
  },
  async mounted () {
    // Get user id form firbase
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = firebase.auth().currentUser.uid
        this.uid = uid
        this.$store.dispatch('getUserData', uid)
      }
    })
  }
}
</script>
