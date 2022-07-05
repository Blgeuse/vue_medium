<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Spinner from "../components/Spinner.vue";
import Feed from "../components/Feed.vue";

const store = useStore();
const route = useRoute();
const slug = computed(() => route.params.slug);
function getUserProfile() {
  store.dispatch("getUserProfile", { slug: slug.value });
}

const isLoading = computed(() => store.state.userProfile.isLoading);
const userProfile = computed(() => store.state.userProfile.user);
const currentUser = computed(() => store.state.auth.currentUser);
const apiUrl = computed(() => {
  const isFavorites = route.path.includes("favorites");
  return isFavorites
    ? `/articles?favorited=${slug.value}`
    : `/articles?author=${slug.value}`;
});
const isCurrentUserProfile = computed(() => {
  if (!currentUser.value || !userProfile.value) {
    return false;
  }
  return currentUser.value.username === userProfile.value.username;
});

watch(slug, () => {
  getUserProfile();
});
onMounted(() => {
  getUserProfile();
});
</script>
<template>
  <Spinner v-if="isLoading" />
  <div v-if="userProfile" class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="userProfile.image" class="user-img" />
            <h4>{{ userProfile.username }}</h4>
            <p v-if="userProfile.bio">{{ userProfile.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            <router-link
              :to="{ name: 'settings' }"
              v-if="isCurrentUserProfile"
              class="btn btn-sm btn-outline-secondary action-btn"
            >
              Edit Profile Settings
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  :to="{
                    name: 'userProfile',
                    params: { slug: userProfile.username },
                  }"
                  class="nav-link"
                  >My Articles</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  :to="{
                    name: 'userProfileFavorites',
                    params: { slug: userProfile.username },
                  }"
                  class="nav-link"
                  >Favorited Articles</router-link
                >
              </li>
            </ul>
            <Feed :api-url="apiUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
