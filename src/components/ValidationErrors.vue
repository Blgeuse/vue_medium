<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  validationErrors: object | string;
}>();
const errorMessages = computed(() => {
  if (typeof props.validationErrors === "string") {
    return [props.validationErrors];
  }
  console.log(props.validationErrors);

  return Object.entries(props.validationErrors).map((error) => {
    return `${error[0]}: ${error[1].join(" ")}`;
  });
});
</script>
<template>
  <li v-for="errorMessage in errorMessages" :key="errorMessage">
    {{ errorMessage }}
  </li>
</template>

<style scoped></style>
