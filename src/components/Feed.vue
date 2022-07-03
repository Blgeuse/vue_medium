<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Spinner from "./Spinner.vue";

const props = defineProps<{
  apiUrl: string;
}>();
const store = useStore();

onMounted(() => {
  store.dispatch("getFeed", { apiUrl: props.apiUrl });
});
const isLoading = computed(() => store.state.feed.isLoading);
const error = computed(() => store.state.feed.error);
const feed = computed(() => store.state.feed.data);
</script>

<template>
  <div v-if="isLoading">
    <Spinner bottom size="100" />
  </div>
  <div v-if="error">{{ error }}</div>
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
  </div>
</template>

<style lang="scss" scoped></style>
