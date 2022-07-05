<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import Spinner from "../components/Spinner.vue";
import TagList from "../components/TagList.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const isLoading = computed(() => store.state.article.isLoading);
const article = computed(() => store.state.article.article);
const currentUser = computed(() => store.state.auth.currentUser);
const isAuthor = computed(() => {
  if (!currentUser.value || !article.value) return false;
  return currentUser.value.username === article.value.author.username;
});
const slug = computed(() => route.params.slug);

function deleteArticle() {
  store
    .dispatch("deleteArticle", { slug: slug.value })
    .then(() => router.push({ name: "home" }));
}

onMounted(() => {
  store.dispatch("getArticle", { slug: slug.value });
});
</script>
<template>
  <Spinner center size="100" v-if="isLoading" />
  <div v-if="article" class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

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
            <button
              @click="deleteArticle"
              class="btn btn-sm btn-outline-danger"
            >
              <i class="ion-trash-a"></i>
              Delete Article
            </button>
          </span>

          <span v-else>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post <span class="counter">(29)</span>
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.body }}</p>
          <h2 id="introducing-ionic">Introducing RealWorld.</h2>
          <p>{{ article.description }}</p>
        </div>
        <TagList v-if="article.tagList" :tag-list="article.tagList" />
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html"
            ><img src="http://i.imgur.com/Qr71crq.jpg"
          /></a>
          <div class="info">
            <a href="" class="author">Eric Simons</a>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp; Follow Eric Simons
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp; Favorite Post <span class="counter">(29)</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img
                src="http://i.imgur.com/Qr71crq.jpg"
                class="comment-author-img"
              />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img
                  src="http://i.imgur.com/Qr71crq.jpg"
                  class="comment-author-img"
                />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
