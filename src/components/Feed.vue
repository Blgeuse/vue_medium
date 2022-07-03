<script setup lang="ts">
import { onMounted, watch, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { stringify, parseUrl } from "query-string";
import Spinner from "./Spinner.vue";
import Pagination from "./Pagination.vue";
import { LIMIT_PAGES } from "../utils/constants";

const props = defineProps<{
  apiUrl: string;
}>();
const store = useStore();
const route = useRoute();

function getFeed() {
  const parsedUrl = parseUrl(props.apiUrl);
  const params = stringify({
    limit: LIMIT_PAGES,
    offset: offset.value,
    ...parsedUrl.query,
  });
  const apiUrlWithParams = `${parsedUrl.url}?${params}`;
  store.dispatch("getFeed", { apiUrl: apiUrlWithParams });
}

const isLoading = computed(() => store.state.feed.isLoading);
const feed = computed(() => store.state.feed.data);

const currentPage = computed(() => Number(route.query.page || 1));
const url = computed(() => route.path);
const offset = computed(() => currentPage.value * LIMIT_PAGES - LIMIT_PAGES);

watch(currentPage, () => {
  getFeed();
});
onMounted(() => {
  getFeed();
});
</script>

<template>
  <div v-if="isLoading">
    <Spinner bottom size="100" />
  </div>
  <div v-if="feed">
    <div
      v-for="(article, index) in feed.articles"
      :key="index"
      class="article-preview"
    >
      <div class="article-meta">
        <router-link
          :to="{
            name: 'userProfile',
            params: { slug: article.author.username },
          }"
        >
          <img :src="article.author.image" />
        </router-link>
        <div class="info">
          <router-link
            class="author"
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            {{ article.author.username }}
          </router-link>
          <span class="date">{{ article.createdAt }}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> 32
        </button>
      </div>
      <router-link
        :to="{ name: 'article', params: { slug: article.slug } }"
        class="preview-link"
      >
        <h1>
          {{ article.title }}
        </h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
      </router-link>
    </div>
    <Pagination
      :total="feed.articlesCount"
      :limit="LIMIT_PAGES"
      :current-page="currentPage"
      :url="url"
    />
  </div>
</template>

<style lang="scss" scoped></style>
