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
import { bus } from '@/main'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
export default {
  props: {
    workoutName: String,
    price_id: String,
    showLoader: Boolean
  },
  components: {
    StripeCheckout
  },
  data () {
    this.publishableKey = `${process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY}`
    this.test_publishableKey = `${process.env.VUE_APP_STRIPE_TEST_PUBLISHABLE_KEY}`
    return {
      loading: false,
      lineItems: [
        {
          price: this.price_id, // The id of the one-time price you created in your Stripe dashboard
          quantity: 1
        }
      ],
      successURL: 'https://workoutstracker.com/paymentSuccess/' + this.price_id.split('price_').pop(','), // 'https://workoutstracker.com/dashbroad/' + this.price_id.split('price_').pop(','),
      cancelURL: 'https://workoutstracker.com/workouts/'
      // successURL: 'http://localhost:8080/paymentSuccess/' + this.price_id.split('price_').pop(','), // 'https://workoutstracker.com/dashbroad/' + this.price_id.split('price_').pop(','),
      // cancelURL: 'http://localhost:8080/workouts/'
    }
  },
  methods: {
    async submit () {
      // You will be redirected to Stripe's secure checkout page
      localStorage.setItem('StripeWorkoutName', this.workoutName)
      bus.$emit('setTrue', true)
      this.$refs.checkoutRef.redirectToCheckout()
    }
  }
}
</script>
