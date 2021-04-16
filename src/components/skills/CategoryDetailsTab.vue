<template>
  <div
    class="flex flex-col">
    <font-awesome-icon 
      :icon="[`${category.icon.prefix}`, `${category.icon.name}`]" 
      class="text-4xl self-center"
    />
    {{category.category}}
  </div>
</template>

<script>
export default {
  props:['category']
}
</script>

<style>

</style>