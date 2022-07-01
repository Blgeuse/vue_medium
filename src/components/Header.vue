<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

const isLoggedIn = computed(() => {
  return store.state.auth.isLoggedIn;
});
</script>
<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Medium</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Sign up</router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped></style>
