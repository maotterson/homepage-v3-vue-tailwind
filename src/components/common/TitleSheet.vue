<template>
  <div class="sheet flex md:mt-40 mt-48 justify-evenly transform transition-all">
    <div class="card p-8 md:w-3/4">
      <h1 class="md:text-8xl text-7xl md:mb-0 mb-8">{{title}}.</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'subtitle', 'em', 'noSpacer']

}
</script>

<style>
</style>