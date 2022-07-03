<script setup lang="ts">
import Feed from "../components/Feed.vue";
import PopularTags from "../components/PopularTags.vue";
const apiUrl = "/articles";
</script>
<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>
        </div>

        <Feed :api-url="apiUrl" />

        <PopularTags />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
