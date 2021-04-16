<template>
  <div>
    <TitleSheet 
      :title="'Hello'"
      class="h-screen"
    >
      <p class="text-4xl text-gray-800 mt-5 ">My name is <span class="text-red-600">Mark Otterson</span>.</p>
      <p class="text-4xl text-gray-700 mt-5 ">I am a software/web developer and tutor from <span class="text-blue-600">Cleveland, Ohio</span>.</p>
      <p class="text-4xl text-gray-700 mt-48 mb-5">Contact or follow me at:</p>
      <ul>
        <Social
          v-for="social in socials" 
          :key="social.name" 
          :social="social"
        />
      </ul>
    </TitleSheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleSheet from '../components/common/TitleSheet.vue'
import Social from '../components/home/Social.vue'
export default Vue.extend({
  components:{
    TitleSheet,
    Social
  },
  computed:{
    socials(){
      return this.$store.state.socials
    }
  }
})
</script>

<style>

</style>