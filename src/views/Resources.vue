<template>
  <div class="resources">
  <div class="row g-0 bg-light position-relative px-5">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img :src="P1" class="w-50" alt="...">
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
   <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<h1>Popular Weight Loss Supplements</h1>
<div class="card-group px-5">
  <div class="card">
    <div class="productImg">
      <img :src="P1" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">BioFit</h5>
      <p class="card-text"><small class="text-muted">Weight Loss Probiotic Supplement</small></p>
      <p class="card-text min_h_144px">
        BioFit, an all-natural way to aid the user in
        losing weight with the help of good bacteria. BioFit is a probiotics
        formula designed to keep the gut healthy and trigger weight loss.
        </p>
        <a href="https://00d37xtx1e03i4d0lmgczl59q5.hop.clickbank.net/" target="_blank" class="stretched-link">Learn more</a>
    </div>
  </div>
  <div class="card">
    <div class="productImg">
      <img :src="P2" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">Okinawa Flat Belly Tonic</h5>
      <p class="card-text"><small class="text-muted">Weight Loss Tonic Supplement</small></p>
      <p class="card-text min_h_144px">
        Okinawa Flat Belly Tonic is a nutritional
        supplement powder that claims to encourage
        weight loss using an ancient Japanese drink
        recipe that melts body fat and causes
        accelerated metabolism benefits.
      </p>
       <a href="https://aa266wqvp6b7ie14hjrjo8et20.hop.clickbank.net/" target="_blank" class="stretched-link">Learn more</a>
    </div>
  </div>
  <div class="card">
    <div class="productImg">
      <img :src='P3' class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h4 class="card-title">MassZymes</h4>
      <p class="card-text"><small class="text-muted">Digestive Enzyme Supplement</small></p>
      <p class="card-text min_h_144px">
        MassZymes is a digestive enzyme supplement that
        contains proteolytic enzymes.
        It enables better absorption of amino
        acids that feed your body, therefore
        providing constipation, gas, and bloating relief
      </p>
       <a href="http://zhangzack.bioptimize.hop.clickbank.net/?w=mz" target="_blank" class="stretched-link">Learn more</a>
    </div>
  </div>
</div>
  </div>
  <!-- <Adsense
    class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-2977178329108046"
    data-ad-slot="2718339478"
    data-ad-format="auto"
    data-full-width-responsive="true"
  /> -->
</template>
<script>
import P3 from '../images/ResourceProducts/p3.png'
import P2 from '../images/ResourceProducts/p2.png'
import P1 from '../images/ResourceProducts/p1.png'
// import axios from 'axios'
export default {
  name: 'Resources',
  data () {
    return {
      recipes: null,
      P3: P3,
      P2: P2,
      P1: P1
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
