<template>
  <div class='NotFound'>
    <h1>404</h1>
    <h2>Page Not Found.</h2>
    <h5>Sorry, we couldn't find the page you're looking for</h5>
    <v-btn class="p-4 mt-4" @click="$router.push({name: 'Home'})">
      Go to Homepage
      <v-icon right>
        mdi-arrow-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
