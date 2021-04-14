<template>
  <div class="sheet flex h-full mt-40 justify-evenly ">
    <div class="card p-8 w-3/4">
      <h1 class="text-8xl">{{title}}.</h1>
      <slot></slot>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  props:['title', 'subtitle', 'em']

}
</script>

<style>
</style>