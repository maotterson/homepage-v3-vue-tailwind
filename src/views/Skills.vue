<template>
  <div>
    <TitleSheet 
      :title="'Skills'"
      class="min-h-screen"
    >
      <p
        class="md:text-4xl text-3xl text-gray-800 mt-5"
      >
        My level of comfortability with various skills/technologies
      </p>
      <div
        class="flex flex-col mt-16">
        <div
          class="flex flex-row  mb-4">
          <CategoryDetailsTab
            v-for="(category) in skillCategories" 
            :key="category.category"
            :category="category"
            class="hover:text-red-600 md:mr-8 mr-4"
            @click.native="showCategory(category)"
          />
        </div>
        <CategoryDetailsPanel 
          :category="selectedCategory ? selectedCategory : null"
        />
      </div>
    </TitleSheet>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TitleSheet from '../components/common/TitleSheet.vue'
import CategoryDetailsTab from '../components/skills/CategoryDetailsTab.vue'
import CategoryDetailsPanel from '../components/skills/CategoryDetailsPanel.vue'
export default Vue.extend({
  components:{
    TitleSheet,
    CategoryDetailsTab,
    CategoryDetailsPanel
  },
  computed:{
    skillCategories() {
      return this.$store.state.skillCategories
    },
    selectedSkillTab() {
      return this.$store.state.selectedCategoryTab
    },
    selectedCategory(){
      return this.$store.state.selectedCategory
    }
  },
  mounted (){
    this.showCategory(this.skillCategories[0])
  },
  methods:{
    showCategory(category){
      const payload = {
        selectedCategory: category
      }
      this.$store.commit('selectedCategory', payload)
    }
  }

})
</script>

<style>

</style>