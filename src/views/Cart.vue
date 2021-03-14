<template>
<div class='myard'>
    <v-card max-width="250" class='card_theme'>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px" />
      <v-card-title>
        INSANITY MAX:30
      </v-card-title>
     <v-card-subtitle class="price">
        $ 4.99
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          Unlock
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
        <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text style="text-align: initial;">
            <b>Includes:</b>
            <li>15 Workout Vedios</li>
            <li>MAX OUT Calendar</li>
            <li>Personal Tracking systems</li>
            <li>Download Links</li>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>
