<template>
  <!-- <graph-line-timerange
            :axis-min="0"
            :axis-max="200"
            :axis-reverse="false"
            :axis-format="'MM/dd'"
            :axis-interval="1000 * 60 * 60 * 24"
            :labels="labels"
            :values="values">
        <note :text="'My WEEK-1 Weight (Current Weight: 140lb)'"></note>
        <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
    </graph-line-timerange> -->
     <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width=""
  >
    <v-card-text>
      <div class="display-4 font-weight-thin">
       My Weight Satus
      </div>
    </v-card-text>
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            {{ item.value }}lb
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>
    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    value: [
      100,
      120,
      140
    ],
    today: null
  }),
  mounted () {
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
    const yyyy = today.getFullYear()

    this.today = today = mm + '/' + dd + '/' + yyyy
  }
  // data () {
  //   return {
  //     labels: [new Date('2021-01-17 00:00:00'),
  //       new Date('2021-01-18 00:00:00'),
  //       new Date('2021-01-19 00:00:00'),
  //       new Date('2021-01-20 00:00:00'),
  //       new Date('2021-01-21 00:00:00'),
  //       new Date('2021-01-22 00:00:00'),
  //       new Date('2021-01-23 00:00:00'),
  //       new Date('2021-01-24 00:00:00')
  //     ],
  //     values: [
  //       [new Date('2021-01-18 00:00:00'), 55],
  //       [new Date('2021-01-19 00:00:00'), 30],
  //       [new Date('2021-01-20 00:00:00'), 70],
  //       [new Date('2021-01-21 00:00:00'), 90],
  //       [new Date('2021-01-22 00:00:00'), 45]
  //     ]
  //   }
  // }
}
</script>
