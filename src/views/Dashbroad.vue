<template>
  <div class="dashbroad">
    <div class="data">
      <h1>My Dashbroad</h1>
      <div class="lb">
        <linechart class="lc"/>
        <myTable class="tb" />
      </div>
      <barchart class="bc" />
    </div>
  </div>
</template>

<script>
import linechart from '@/components/Dashbroad/lineChart.vue'
import barchart from '@/components/Dashbroad/barChart.vue'
import myTable from '@/components/Dashbroad/table.vue'

export default {
  name: 'Home',
  components: {
    myTable,
    barchart,
    linechart
  },
  data () {
    return {
      date: '',
      time: '',
      context: ''
    }
  }
}
</script>
