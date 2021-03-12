<template>
  <div class="InsanityMax30">
    <div class="buttons">
      <b-button  @click="showM1" :pressed="!month2 || month1" squared :variant="variant" >MONTH 1</b-button>
      <b-button  @click="showM2" :pressed="!month1" :variant="variant2" squared>MONTH 2</b-button>
    </div>
    <div class="workouts">
      <Max30month1 v-show="!month2 || month1" />
      <Max30month2  v-show="!month1" />
    </div>
  </div>
</template>

<script>
import Max30month1 from '@/components/Workouts/InsanityMax30/max30month1.vue'
import Max30month2 from '@/components/Workouts/InsanityMax30/max30month2.vue'

export default {
  name: 'InsanityMax30',
  components: {
    Max30month1,
    Max30month2
  },
  data () {
    return {
      month1: true,
      month2: false,
      variant: 'primary',
      variant2: ''
    }
  },
  methods: {
    showM1: function () {
      this.month1 = true
      this.month2 = false
      this.variant = 'primary'
      this.variant2 = ''
      return {
        month1: true
      }
    },
    showM2: function () {
      this.month2 = true
      this.month1 = false
      this.variant = ''
      this.variant2 = 'primary'
      return {
        month2: true
      }
    }
  }
}
</script>
