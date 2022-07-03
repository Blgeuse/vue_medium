<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

const tags = computed(() => store.state.popularTags.tags);
const isLoading = computed(() => store.state.popularTags.isLoading);
onMounted(() => {
  store.dispatch("getPopularTags");
});
</script>

<template>
  <div class="col-md-3">
    <div class="sidebar">
      <p>Popular Tags</p>
      <span v-if="isLoading">Loading tags...</span>
      <div v-else class="tag-list">
        <router-link
          v-for="tag in tags"
          :key="tag"
          :to="{ name: 'tag', params: { slug: tag } }"
          class="tag-pill tag-default"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
