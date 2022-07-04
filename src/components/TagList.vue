<script setup lang="ts">
const props = defineProps<{
  tagList: string[];
}>();
</script>
<template>
  <ul class="tag-list">
    <li
      v-for="tag in props.tagList"
      :key="tag"
      class="tag-default tag-pill tag-outline"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<style scoped></style>
