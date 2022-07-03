<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  total: number;
  limit: number;
  currentPage: number;
  url: string;
}>();

const pages = computed(() => {
  return Math.ceil(props.total / props.limit);
});

</script>
<template>
  <ul class="pagination">
    <li
      class="page-item"
      v-for="page in pages"
      :key="page"
      :class="{ active: props.currentPage === page }"
    >
      <router-link class="page-link" :to="{ path: props.url, query: { page } }">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped></style>
