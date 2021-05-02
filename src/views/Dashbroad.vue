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
import { mapState } from 'vuex'
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
    ])
  }
}
</script>
