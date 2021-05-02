<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit" class="stripeBtn">
      <i class="mdi mdi-lock-open-variant" /> Unlock now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe'
export default {
  props: {
    workoutName: String,
    price_id: String
  },
  components: {
    StripeCheckout
  },
  data () {
    this.publishableKey = `${process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY}`
    return {
      loading: false,
      lineItems: [
        {
          price: this.price_id, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1
        }
      ],
      successURL: null, // 'https://localhost:8080/workout',
      cancelURL: 'http://www.workoutstracker/workout'
    }
  },
  methods: {
    async submit () {
      this.successURL = 'http://localhost:8080/dashbroad/' + this.price_id.split('price_').pop(',')
      alert(this.successURL)
      // You will be redirected to Stripe's secure checkout page
      this.$router.replace({ name: 'PaymentSuccess' })
      // this.$refs.checkoutRef.redirectToCheckout()
    }
  }
}
</script>
