<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Spinner from "./components/Spinner.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getCurrentUser");
});
const isLoggedIn = computed(() => store.state.auth.isLoggedIn === null);
</script>

<template>
  <div v-if="isLoggedIn">
    <Spinner center />
  </div>
  <div v-else>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style></style>
