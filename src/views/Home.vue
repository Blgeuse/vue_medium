<script setup lang="ts">
import Feed from "../components/Feed.vue";
import PopularTags from "../components/PopularTags.vue";
import FeedToggler from "../components/FeedToggler.vue";
const apiUrl = "/articles";
</script>
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Medium</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <FeedToggler />
          <Feed :api-url="apiUrl" />
        </div>

        <PopularTags />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
