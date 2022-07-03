<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps<{
  tag?: string | object;
}>();
const isLoggedIn = computed(() => store.state.auth.isLoggedIn);
</script>
<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li v-if="isLoggedIn" class="nav-item">
        <router-link :to="{ name: 'yourFeed' }" class="nav-link">
          Your Feed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'home' }" class="nav-link">
          Global Feed
        </router-link>
      </li>
      <li v-if="props.tag" class="nav-item">
        <router-link :to="{ name: 'tag' }" class="nav-link">
          <i class="ion-pound" />
          {{ tag }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
