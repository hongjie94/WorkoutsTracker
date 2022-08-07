<template>
   <div class="pagination" @click="changePage">
      <v-pagination
        v-model="page"
        :length="pageNum"
        circle>
      </v-pagination>
    </div>
</template>

<script>
import { bus } from '@/main'
export default {
  props: {
    pageNum: Number
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    // Update parent component's page number, when page toggle
    changePage () {
      bus.$emit('changePage', (this.page))
    }
  }
}
</script>
