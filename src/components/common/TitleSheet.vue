<template>
  <div class="sheet flex mt-40 justify-evenly transform transition-all">
    <div class="card p-8 w-3/4">
      <h1 class="text-8xl">{{title}}.</h1>
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