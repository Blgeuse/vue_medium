<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getCurrentUser");
});
</script>

<template>
  <Header />
  <router-view />
</template>

<style></style>
