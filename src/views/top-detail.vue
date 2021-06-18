<template>
  <div class="top-detail">
    <music-list
      :songs="songs"
      :title="title"
      :pic="pic"
      :loading="loading"
      rank
    ></music-list>
  </div>
</template>

<script>
  import createDetailComponent from '@/assets/js/create-detail-component'
  import { getTopDetail } from '@/service/top-list'
  import { TOP_KEY } from '@/assets/js/constant'

  export default createDetailComponent('top-detail', TOP_KEY, getTopDetail)
</script>

<style scoped>

</style>
