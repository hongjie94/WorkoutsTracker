<template>
  <div class="supplements">
    <h1>Weight Loss Supplements</h1>
    <div class="card-group px-5 mt-5">
      <div class="card mx-2">
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
      <div class="card mx-2">
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
      <div class="card mx-2">
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
</template>
<script>
import P3 from '../images/SupplementProducts/p3.png'
import P2 from '../images/SupplementProducts/p2.png'
import P1 from '../images/SupplementProducts/p1.png'
export default {
  name: 'Resources',
  data () {
    return {
      recipes: null,
      P3: P3,
      P2: P2,
      P1: P1
    }
  }
}
</script>
<style>

</style>
