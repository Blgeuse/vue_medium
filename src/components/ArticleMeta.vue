<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import AddToFavorites from "../components/AddToFavorites.vue";
import FollowUser from "./FollowUser.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const article = computed(() => store.state.article.article);
const currentUser = computed(() => store.state.auth.currentUser);
const slug = computed(() => route.params.slug);
const isAuthor = computed(() => {
  if (!currentUser.value || !article.value) return false;
  return currentUser.value.username === article.value.author.username;
});

function toggleFollowUser() {}

function deleteArticle() {
  store
    .dispatch("deleteArticle", { slug: slug.value })
    .then(() => router.push({ name: "home" }));
}
</script>
<template>
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
        :to="{
          name: 'userProfile',
          params: { slug: article.author.username },
        }"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt }}</span>
    </div>

    <span v-if="isAuthor">
      <router-link
        :to="{ name: 'editArticle', params: { slug: article.slug } }"
        class="btn btn-sm btn-outline-secondary"
      >
        <i class="ion-edit"></i>
        Edit Article
      </router-link>
      &nbsp;&nbsp;
      <button @click="deleteArticle" class="btn btn-sm btn-outline-danger">
        <i class="ion-trash-a"></i>
        Delete Article
      </button>
    </span>

    <span v-else>
      <FollowUser
        :username="article.author.username"
        :is-following="article.author.following"
      />
      &nbsp;&nbsp;
      <AddToFavorites
        text="Favorite Post"
        :is-favorited="article.favorited"
        :article-slug="article.slug"
        :favorites-count="article.favoritesCount"
      />
    </span>
  </div>
</template>

<style scoped></style>
