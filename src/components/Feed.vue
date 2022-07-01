<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

const props = defineProps<{
  apiUrl: string;
}>();
const store = useStore();
onMounted(() => {
  console.log();
  store.dispatch("getFeed", { apiUrl: props.apiUrl });
});
</script>

<template></template>

<style lang="scss" scoped></style>
