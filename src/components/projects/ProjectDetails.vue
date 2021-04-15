<template>
    <div class="h-screen flex justify-between p-24 relative" :id="project.sectionId">
      <div class="flex-grow-0	w-1/2 z-50">
        <h1 class="pt-96 text-7xl">{{project.name}}</h1>
        <p class= "text-4xl mt-6">{{project.description}}</p>
        <div class="flex flex-row justify-start	mt-8">
          <div 
            v-if="project.link"
            class="py-4 px-12 mr-12 rounded cursor-pointer"
            :class="isDarkTheme ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white'">
            <a :href="project.link"><span>Visit Webpage</span></a>
          </div>
          <div 
            v-if="project.github"
            class="py-4 px-12 mr-12 rounded cursor-pointer"
            :class="isDarkTheme ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white'">
            <a :href="project.github"><span>View on GitHub</span></a>
          </div>
        </div>
      </div>
      <div class="flex-grow-1	z-50">
      </div>
      <div class="absolute inset-0 w-screen z-1">
      <video class=" opacity-10 w-screen" autoplay muted loop id="myVideo">
        <source 
          :src="project.bgVideo" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props:['project', 'isDarkTheme']
}
</script>

<style>

</style>