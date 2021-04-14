<template>
  <div class="h-screen">
    <TitleSheet 
      :title="'Projects'"
    >
      <p class="text-5xl text-gray-800 mt-48">Explore some of the projects I've worked on</p>
      <div class="mt-5 flex flex-row">
        <a
          v-for="project in projects"
          :key="project.name"
          class="border-2	border-black h-40 w-40 flex items-center justify-center"
          :href="`#${project.sectionId}`">
            <span
              class="self-center"
            >{{project.name}}</span>
        </a>
      </div>
    </TitleSheet>
    <ProjectDetails
      v-for="(project,i) in projects" 
        :key="project.name"
        :project="project"
        :class="i%2==0 ? 'bg-black text-white flex-row' : 'bg-white text-black flex-row-reverse'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleSheet from '../components/common/TitleSheet.vue'
import ProjectDetails from '../components/projects/ProjectDetails.vue'
export default Vue.extend({
  components:{
    TitleSheet,
    ProjectDetails
  },
  computed:{
    projects() {
      return this.$store.state.projects
    }
  }
})
</script>

<style>

</style>