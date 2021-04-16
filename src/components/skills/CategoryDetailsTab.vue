<template>
  <div
    class="flex flex-col"
    :class="isSelected ? 'text-red-600' : 'text-black'">
    <font-awesome-icon 
      :icon="[`${category.icon.prefix}`, `${category.icon.name}`]" 
      class="text-4xl self-center"
    />
    {{category.category}}
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