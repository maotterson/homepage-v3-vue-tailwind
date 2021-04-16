<template>
  <div class="">
    <TitleSheet 
      :title="'Projects'"
      class="h-screen w-screen"
    >
      <p class="text-5xl text-gray-800 mt-48">Explore some of the projects I've worked on</p>
      <div class="mt-5 flex flex-row"
        >
        <a
          v-for="project in projects"
          :key="project.name"
          class="cursor-pointer project-thumbnail mr-6 flex-col flex items-center justify-center hover:text-red-600"
          @click="scrollToSection(project.sectionId)"
          >
            <div
              class="h-48 w-48 bg-cover"
              :class="`${project.image}-thumb`">
            </div>
            <span
              class="self-center transform text-2xl"
            >{{project.name}}</span>
        </a>
      </div>
    </TitleSheet>
    <ProjectDetails
      v-for="(project,i) in projects" 
        :key="project.name"
        :project="project"
        :isDarkTheme="i%2==0 ? true : false"
        :ref="project.sectionId"
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
    },
    scrollY() {
      return this.$store.state.scrollY
    }
  },
  data () {
      return {
          pageBounds : []
      }
  },
  mounted(){
    this.setPageBounds();
  },
  watch:{
    scrollY(){
      const currentPage = this.determineCurrentPage()
      let isDarkTheme = false;
      currentPage%2==0 ? isDarkTheme=false : isDarkTheme=true;
      const payload = {
        isDarkTheme: isDarkTheme
      }
      this.$store.commit(`setIsDarkTheme`,payload)
    }
  },
  methods:{
    scrollToSection(sectionId){
      this.$refs[sectionId][0].$el.scrollIntoView({behavior: "smooth"})
    },
    determineCurrentPage(){
      for(let i=0; i<this.pageBounds.length; i++){
        const bottomBound = this.pageBounds[i]
        if(this.scrollY <= bottomBound){
          return i
        }
      } 
      // should never reach here, can't scroll beyond final project
      return this.pageBounds.length
    },
    setPageBounds(){
      this.pageBounds=[]
      this.projects.forEach(project =>{
        // additional offset for icon size
        const offsetTransition = 50;
        const offsetSection = this.$refs[project.sectionId][0].$el.offsetTop-offsetTransition
        this.pageBounds.push(offsetSection)
      })
    }
  }
})
</script>

<style>
.vaccine-thumb{
  background-image: url('~../assets/thumbnails/vaccine-thumbnail.svg');
}
.project-thumbnail:hover>.vaccine-thumb{
  background-image: url('~../assets/thumbnails/vaccine-thumbnail-red.svg');
}

.weather-thumb{
  background-image:url('~../assets/thumbnails/weather-thumbnail.svg')
}
.project-thumbnail:hover>.weather-thumb{
  background-image:url('~../assets/thumbnails/weather-thumbnail-red.svg')
}


.geography-thumb{
  background-image:url('~../assets/thumbnails/geography-thumbnail.svg')
}
.project-thumbnail:hover>.geography-thumb{
  background-image:url('~../assets/thumbnails/geography-thumbnail-red.svg')
}

.blackjack-thumb{
  background-image:url('~../assets/thumbnails/blackjack-thumbnail.svg')
}
.project-thumbnail:hover>.blackjack-thumb{
  background-image:url('~../assets/thumbnails/blackjack-thumbnail-red.svg')
}

</style>