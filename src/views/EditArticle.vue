<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ArticleForm from "../components/ArticleForm.vue";
import Spinner from "../components/Spinner.vue";

const store = useStore();
const route = useRoute();
const slug = computed(() => route.params.slug);
const isLoading = computed(() => store.state.article.isLoading);
const article = computed(() => store.state.article.article);

onMounted(() => {
  store.dispatch("getArticle", { slug: slug.value });
});
</script>
<template>
  <div>
    <Spinner v-if="isLoading" />
    <div v-if="!isLoading && article">
      <ArticleForm edit />
    </div>
  </div>
</template>

<style scoped></style>
