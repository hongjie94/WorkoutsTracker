<template>
   <div class="container videos">
        <div
          class="iframe_video"
          v-for="(video, i) in workoutVideos"
          :key="i"
          @click="toggleLoader(video.name)"
        >
          <!-- Title and download icon -->
          <div class="block">
              <h6 class="video_title">{{video.name}}</h6>
            <div class="download_icon_div">
              <div class="download_icon">
                <a :href="video.downloadLinks" download>
                  <i class="mdi mdi-download-circle dl"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- loader -->
          <div class="video_cover" v-if="video.name !== showCover">
            <div class="img_div">
              <img :src="video.thumnail" alt="not-found">
            </div>
            <v-progress-circular
              v-if="video.name === showLoader"
              :rotate="-90"
              :size="70"
              :width="15"
              :value="value"
            >
              {{ value }}%
            </v-progress-circular>
          </div>

          <!-- iframe -->
          <div class="iframe_div">
          <iframe
            v-if="video.name === showFrame"
            class="iframe"
            :src="video.url"
            allowfullscreen
            />
          </div>
        </div>

      </div>
</template>

<script>
export default {
  name: 'CurrentWorkout',
  data () {
    return {
      showLoader: '',
      showFrame: '',
      showCover: '',
      interval: {},
      value: 0
    }
  },
  props: {
    workoutVideos: Array
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    toggleLoader (name) {
      clearInterval(this.interval)
      this.value = 0
      this.showLoader = name
      this.showFrame = name
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.showCover = name)
        }
        this.value += 20
      }, 500)
    }
  }
}
</script>
<style scoped>

</style>
