<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";

const props = defineProps<{
  isFavorited: boolean;
  articleSlug: string;
  favoritesCount: number;
  text?: string;
}>();
const store = useStore();

const isFavorited = ref(props.isFavorited);
const favoritesCount = ref(props.favoritesCount);

function handleLike() {
  store.dispatch("addToFavorites", {
    slug: props.articleSlug,
    isFavorited: isFavorited.value,
  });
  isFavorited.value ? --favoritesCount.value : ++favoritesCount.value;
  isFavorited.value = !isFavorited.value;
}
</script>
<template>
  <button
    @click="handleLike"
    class="btn btn-sm"
    :class="[isFavorited ? 'btn-primary' : 'btn-outline-primary']"
  >
    <i class="ion-heart"></i> {{ props.text }} {{ favoritesCount }}
  </button>
</template>

<style scoped></style>
