<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  validationErrors: Object;
}>();
const errorMessages = computed(() => {
  return Object.keys(props.validationErrors).map((name) => {
    return `${name}: ${props.validationErrors[name].join(", ")}`;
  });
});
</script>
<template>
  <li v-for="errorMessage in errorMessages" :key="errorMessage">
    {{ errorMessage }}
  </li>
</template>

<style scoped></style>
