
<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    item-key="name"
    class="elevation-1"
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      prevIcon: 'mdi-minus',
      nextIcon: 'mdi-plus'
    }"
  ></v-data-table>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Day (Total 58 Days)',
          align: 'start',
          value: 'day'
        },
        { text: 'Workout', value: 'name' },
        { text: 'Complete', value: 'complete' },
        { text: 'MAXOUT', value: 'day' },
        { text: 'Duration', value: 'day' }
      ],
      desserts: [
        {
          name: 'Max out cardio',
          day: 'DAY 1',
          complete: 'jan, 15, 2021'
        },
        {
          name: 'Max out power',
          day: 'DAY 2'
        },
        {
          name: 'Cupcake 3',
          day: 'DAY 3'
        },
        {
          name: 'Cupcake',
          category: 'Pastry'
        },
        {
          name: 'Gingerbread',
          category: 'Cookie'
        },
        {
          name: 'Jelly bean',
          category: 'Candy'
        },
        {
          name: 'Lollipop',
          category: 'Candy'
        },
        {
          name: 'Honeycomb',
          category: 'Toffee'
        },
        {
          name: 'Donut',
          category: 'Pastry'
        },
        {
          name: 'KitKat',
          category: 'Candy'
        }
      ]
    }
  }
}
</script>
