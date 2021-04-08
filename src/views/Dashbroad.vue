<template>
  <div class="dashbroad">
    <v-card dark color="dashbroad-header">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-4 dashbroad-header--text">
          My Dashbroad
        </h1>
      </v-card-title>

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

    <v-tabs-items  v-model="tab">
      <v-tab-item v-for="selection in selections" :key="selection">
        <v-card color="basil" flat>
          <Calendar class="calendar" v-if="selection === 'Calendar'" />
          <MyTable class="table" v-if="selection === 'Records'"/>
          <LineChart class="lineChart" v-if="selection === 'Records'" style="display:none"/>
          <BarChart class="barChart"  v-if="selection === 'Diet'" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>

<script>
import LineChart from '@/components/Dashbroad/lineChart.vue'
import BarChart from '@/components/Dashbroad/barChart.vue'
import MyTable from '@/components/Dashbroad/table.vue'
import Calendar from '@/components/Dashbroad/calendar.vue'

export default {
  name: 'Home',
  components: {
    MyTable,
    BarChart,
    LineChart,
    Calendar
  },
  data () {
    return {
      date: '',
      time: '',
      context: '',
      tab: null,
      sections: [
        'Workouts', 'Calendar', 'Records', 'Diet'
      ],
      selections: [
        'Workouts', 'Calendar', 'Records', 'Diet'
      ]
    }
  }
}
</script>
<style>
.v-application--wrap {
  min-height: auto
}
/* Helper classes */
.dashbroad-header {
  background-color: #1E1E1E !important;
  opacity: .8 !important;
}
.dashbroad-header--text {
  color: rgba(255, 255, 255, 0.7) !important;
}
/* .v-sheet.v-card {
    border-radius: 0;
} */
</style>
