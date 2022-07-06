<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const props = defineProps<{
  userImage?: string;
  username?: string;
  commentBody?: string;
  commentDate?: string;
  id: number;
}>();
const store = useStore();
const route = useRoute();
const currentUser = computed(() => store.state.auth.currentUser);
const slug = computed(() => route.params.slug);
const isCurrentUserProfile = computed(() => {
  if (!currentUser.value) {
    return false;
  }
  return currentUser.value.username === props.username;
});
function deleteComment() {
  store.dispatch("deleteComment", { slug: slug.value, id: props.id });
}
</script>
<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ commentBody }}</p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="userImage" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{ username }}</a>
      <span class="date-posted">{{ commentDate }}</span>
      <span v-if="isCurrentUserProfile" class="mod-options">
        <i @click="deleteComment" class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
