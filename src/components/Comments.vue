<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import CommentItem from "./CommentItem.vue";
import Spinner from "./Spinner.vue";
const store = useStore();
const route = useRoute();

const currentUser = computed(() => store.state.auth.currentUser);
const isLoading = computed(() => store.state.comment.isLoading);
const comments = computed(() => store.state.comment.comments);
const slug = computed(() => route.params.slug);
const commentInpute = ref("");

function createComment() {
  store.dispatch("createComment", {
    slug: slug.value,
    comment: {
      body: commentInpute.value,
    },
  });
  commentInpute.value = "";
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-md-8 offset-md-2">
      <form @submit.prevent="createComment" class="card comment-form">
        <div class="card-block">
          <textarea
            v-model.trim="commentInpute"
            class="form-control"
            placeholder="Write a comment..."
            rows="3"
          ></textarea>
        </div>
        <div class="card-footer">
          <img :src="currentUser.image" class="comment-author-img" />
          <button class="btn btn-sm btn-primary">Post Comment</button>
        </div>
      </form>
      <Spinner v-if="isLoading" />
      <div v-if="comments">
        <CommentItem
          v-for="comment in comments"
          :key="comment.id"
          :id="comment.id"
          :userImage="comment.author.image"
          :username="comment.author.username"
          :commentBody="comment.body"
          :commentDate="comment.createdAt"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
