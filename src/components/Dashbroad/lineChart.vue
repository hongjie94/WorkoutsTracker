<template>
  <graph-line-timerange
            :axis-min="0"
            :axis-max="200"
            :axis-reverse="false"
            :axis-format="'MM/dd'"
            :axis-interval="1000 * 60 * 60 * 24"
            :labels="labels"
            :values="values">
        <note :text="'My WEEK-1 Weight (Current Weight: 140lb)'"></note>
        <guideline :tooltip-x="true" :tooltip-y="true"></guideline>
    </graph-line-timerange>
</template>
<script>
export default {
  data () {
    return {
      labels: [new Date('2021-01-17 00:00:00'),
        new Date('2021-01-18 00:00:00'),
        new Date('2021-01-19 00:00:00'),
        new Date('2021-01-20 00:00:00'),
        new Date('2021-01-21 00:00:00'),
        new Date('2021-01-22 00:00:00'),
        new Date('2021-01-23 00:00:00'),
        new Date('2021-01-24 00:00:00')
      ],
      values: [
        [new Date('2021-01-18 00:00:00'), 55],
        [new Date('2021-01-19 00:00:00'), 30],
        [new Date('2021-01-20 00:00:00'), 70],
        [new Date('2021-01-21 00:00:00'), 90],
        [new Date('2021-01-22 00:00:00'), 45]
      ]
    }
  }
}
</script>
