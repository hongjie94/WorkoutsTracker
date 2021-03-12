<template>
  <graph-bar
            :height="500"
            :axis-min="0"
            :axis-max="30"
            :labels="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
            :values="month">
        <note :text="'Insanity Maxout Time Chart'"></note>
        <tooltip :names="names" :position="'left'"></tooltip>
        <legends :names="names" :filter="true"></legends>
    </graph-bar>
</template>
<script>
export default {
  data () {
    return {
      names: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
      month: [
        [2.75, 10, 10, 10],
        [30, 30, 30, 30],
        [2.75, 10, 10, 10],
        [30, 30, 30, 30],
        [2.75, 10, 10, 10],
        [30, 30, 30, 30],
        [2.75, 10, 10, 10],
        [30, 30, 30, 30]
      ]
    }
  }
}
</script>
