<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Spinner from "../components/Spinner.vue";
import TagList from "../components/TagList.vue";
import ArticleMetaVue from "../components/ArticleMeta.vue";
import Comments from "../components/Comments.vue";

const store = useStore();
const route = useRoute();

const isLoading = computed(() => store.state.article.isLoading);
const article = computed(() => store.state.article.article);
const slug = computed(() => route.params.slug);
const currentUser = computed(() => store.state.auth.currentUser);

onMounted(() => {
  store.dispatch("getArticle", { slug: slug.value });
  store.dispatch("getComment", { slug: slug.value });
});
</script>
<template>
  <Spinner center size="100" v-if="isLoading" />
  <div v-if="article" class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <ArticleMetaVue />
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.description }}</p>
          <p>{{ article.body }}</p>
        </div>
        <TagList v-if="article.tagList" :tag-list="article.tagList" />
      </div>
      <hr />
      <Comments />
    </div>
  </div>
</template>

<style scoped></style>
