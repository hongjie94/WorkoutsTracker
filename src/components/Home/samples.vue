<template>
  <section id="samples">
      <div class="samples">
        <h1>Top Workouts</h1>
        <ul>
          <li v-for="workout in workouts" :key="workout.name">
            <router-link to= "/workouts">
              <img :src="workout.imageURL" />
            </router-link>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>

export default {
  data: () => ({
    workouts: [
      { name: 'Insanity', imageURL: require('./img/samples/Insanity.png') },
      { name: 'InsanityMax30', imageURL: require('./img/samples/InsanityMax30.jpeg') },
      { name: 'InsaityAsylumv1', imageURL: require('./img/samples/AsylumVol1.jpeg') },
      { name: 'InsaityAsylumv2', imageURL: require('./img/samples/AsylumVol2.jpeg') },
      { name: 'FT25', imageURL: require('./img/samples/T25.jpeg') },
      { name: 'T20', imageURL: require('./img/samples/Transform20.png') },
      { name: 'P90X', imageURL: require('./img/samples/P90X.jpeg') },
      { name: 'P90X2', imageURL: require('./img/samples/P90X2.jpeg') },
      { name: 'P90X3', imageURL: require('./img/samples/P90X3.png') },
      { name: 'CDF', imageURL: require('./img/samples/CDF.jpeg') },
      { name: 'yogWarrior365', imageURL: require('./img/samples/yogWarrior365.jpeg') },
      { name: 'YogaRetreat', imageURL: require('./img/samples/YogaRetreat.jpeg') }
    ]
  })
}

</script>
