<template>
  <div>
    <TitleSheet 
      :title="'Hello'"
    >
      <h2 class="text-5xl text-gray-300 mt-5 ">My name is <em>Mark Otterson</em>.</h2>
    </TitleSheet>
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