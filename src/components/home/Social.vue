<template>
  <li class="md:mr-8 mr-4 py-1 text-gray-800 hover:text-red-700 md:text-2xl inline-block	delay-100">
    <a :href="social.link" class="flex flex-col items-center	justify-items-center">
      <div class="mb-2 md:text-5xl text-3xl">
        <font-awesome-icon :icon="[`${social.iconPrefix}`, `${social.iconA}`]" />
      </div>
      <div>
        <span>{{social.name}}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props:['social']

}
</script>

<style>

</style>