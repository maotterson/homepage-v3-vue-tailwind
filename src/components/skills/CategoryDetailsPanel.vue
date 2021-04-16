<template>
  <div
    class="bg-white w-3/4 text-black"
  >
    <div
      v-if="category">
      <div
        v-for="skill in category.skills"
        :key="skill.name"
        class="flex flex-col py-10 items-start h-48"
      >
        <div
          class="flex flex-row items-center"
        >
          <font-awesome-icon 
                :icon="[`${skill.icon.prefix}`, `${skill.icon.name}`]" 
                class="text-6xl self-center mr-8"
            />
          <div
            class="flex flex-col">
            
            <h1
              class="text-4xl"
            >{{skill.name}}</h1>
            <div
              v-if="skill.subs" class="flex flex-row">
                <h2
                  v-for="sub,i in skill.subs"
                  :key="sub"
                  class="text-xl"
                >
                  <span
                    class="text-gray-400"
                  >{{sub}}
                  <span
                    v-if="i!=skill.subs.length-1"
                    class="mr-2 -ml-1"
                    >, </span>
                  </span>
                </h2>
            </div>
          </div>
        </div>
        <div
          class="w-full h-10 bg-gray-400 flex flex-row">
          <div
            v-for="i in parseInt(skill.level)"
            :key="i"
            class="w-1/5 h-full bg-red-600"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['category']
}
</script>

<style>

</style>