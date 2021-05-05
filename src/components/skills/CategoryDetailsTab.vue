<template>
  <div
    class="flex flex-col justify-center md:text-md text-xs items-center self-center"
    :class="isSelected ? 'text-red-600' : 'text-black'">
    <font-awesome-icon 
      :icon="[`${category.icon.prefix}`, `${category.icon.name}`]" 
      class="md:text-4xl text-3xl self-center text-center  mb-1"
    />
    <span
      class="text-center ">
    {{category.category}}
    </span>
  </div>
</template>

<script>
export default {
  props:['category'],
  data () {
      return {
          isSelected : false
      }
  },
  computed:{
    selectedCategory() {
      return this.$store.state.selectedCategory
    }
  },
  watch:{
    selectedCategory(){
      this.checkIsSelected();
    }
  },
  mounted(){
    this.checkIsSelected();
  },
  methods:{
    checkIsSelected(){
      (this.selectedCategory.category == this.category.category) ? this.isSelected=true : this.isSelected=false;
    }
  }
}
</script>

<style>

</style>