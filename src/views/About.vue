<template>
  <div>
    <TitleSheet 
      :title="'About me'"
      class="h-screen w-screen"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleSheet from '../components/common/TitleSheet.vue'
export default Vue.extend({
  components:{
    TitleSheet
  }
})
</script>

<style>

</style>