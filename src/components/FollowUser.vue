<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps<{
  username: string,
  isFollowing: boolean,
}>();

const store = useStore();
const isFollowing = ref(props.isFollowing)


function toggleFollowUser() {
  store.dispatch("toggleFollowUser", {
    slug: props.username,
    isFollowing: isFollowing.value,
  });
  isFollowing.value = !isFollowing.value;
}
</script>

<template>
  <button
    @click="toggleFollowUser"
    class="btn btn-sm action-btn ng-binding"
    :class="isFollowing ? 'btn-secondary' : 'btn-outline-secondary'"
  >
    <i class="ion-plus-round"></i>
    &nbsp; Follow {{ username }}
  </button>
</template>

<style scoped></style>
