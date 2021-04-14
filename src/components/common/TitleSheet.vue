<template>
  <div class="sheet flex mt-40 justify-evenly ">
    <div class="card p-8 w-full">
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