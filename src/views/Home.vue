<template>
  <div>
    <bounce-loader :loading="isLoading" color="#68d391" :size="100"/>
    <PxAssetsTable v-if="!isLoading" v-bind:assets="assets"/>
  </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable.vue'
import api from '@/api.js'

export default {
  name: "HomeView",
  components: {
    PxAssetsTable
  },
  data() {
    return {
      assets: [],
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    api.getAssets().then(
        resRequest => {
          this.assets = resRequest
        }
    ).finally(() => {
      this.isLoading = false
    })
  }
}
</script>

<style scoped>

</style>