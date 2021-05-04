<template>
  <div>
    <TitleSheet 
      :title="'About me'"
      class="w-screen"
    >
    <p
      class="text-lg mb-4 text-gray-600"
    >
      I am a native of Northeast Ohio and an Ohio State alum. I am interested in opportunities to grow as a software and web developer.
    </p>
    <p
      class="text-lg mb-4 text-gray-600"
    >
      I currently work as a professional tutor, helping college students with everything from introductory programming in C# to building web and mobile applications. Coming from an engineering background, I emphasize the importance of breaking down problems into smaller more manageable tasks. My goal is to come up with simple, elegant explanations and analogies to help students gain a stronger fundamental understanding of seemingly complex principles. I believe in the adage that the better you come to grasp an abstract concept, the easier it should be to convey in layman's terms.
    </p>
    <p
      class="text-lg mb-4 text-gray-600"
    >
      I enjoy working on small programming projects, whether to learn a new technology or create something interesting. Lately most of my projects have been built in a Node.js environment, but most of the students I help work with ASP.NET. I have selected a few projects for my portfolio, but hope to expand it as I decide to go into a bit more depth on certain projects. More specifically there are a lot of cool things I would like to try with the Google Maps API.
    </p>
    <p
      class="text-lg mb-4 text-gray-600"
    >
      In addition to my technical hobbies, I enjoy playing basketball, running, and bicycling.
    </p>
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