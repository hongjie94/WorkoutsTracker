<template>
  <div class="resources">
      <!-- <Adsense
        class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2977178329108046"
        data-ad-slot="2718339478"
        data-ad-format="auto"
        data-full-width-responsive="true"
      /> -->
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'Resources',
  data () {
    return {
      recipes: null
    }
  },
  async mounted () {
    // const options = {
    //   method: 'GET',
    //   url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    //   params: { r: 'sada', q: 'finish' },
    //   headers: {
    //     'x-rapidapi-key': '69124438f7msha8cf62f50ce5d4bp129682jsn1d1be4a103c0',
    //     'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com'
    //   }
    // }
    // await axios.request(options).then((response) => {
    //   const recipes = []
    //   response.data.hits.forEach(recipe => {
    //     recipes.push(recipe)
    //   })
    //   this.recipes = recipes
    //   console.log(this.recipes)
    // }).catch((error) => {
    //   console.error(error)
    // })
  }
}
</script>
<style>

</style>
