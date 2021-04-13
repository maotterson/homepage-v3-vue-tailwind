<template>
  <div class="sheet flex pt-48 justify-evenly ">
    <div class="card p-48 bg-black text-white transform h-screen skew-y-3 w-full ">
      <h1 class="text-8xl">{{title}}.</h1>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'subtitle', 'em']

}
</script>

<style>
</style>