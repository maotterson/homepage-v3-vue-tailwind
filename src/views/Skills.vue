<template>
  <div>
    <TitleSheet 
      :title="'Skills'"
    />
    <div
      class="flex flex-col">
      <div
        class="flex flex-row self-center">
        <CategoryDetailsTab
          v-for="(category) in skillCategories" 
          :key="category.category"
          :category="category"
          class="hover:text-red-600 mr-8"
          @click.native="showCategory(category)"
        />
      </div>
      <CategoryDetailsPanel 
        :category="selectedCategory ? selectedCategory : null"
      />
    </div>
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
    }
  },
  data () {
      return {
          selectedCategory : null
      }
  },
  methods:{
    showCategory(category){
      this.selectedCategory = category
    }
  }

})
</script>

<style>

</style>