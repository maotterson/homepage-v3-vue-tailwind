<template>
  <div class="h-screen flex justify-between" :id="project.sectionId">
    <div>
      <h1 class="pt-96 p-24 text-7xl">{{project.name}}</h1>
      <p class="pl-24 text-4xl">{{project.description}}</p>
    </div>
    <div>
      <h1 class="pt-96 p-24 text-7xl">IMAGE</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:['project']
}
</script>

<style>

</style>