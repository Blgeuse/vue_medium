<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import ValidationErrors from "../components/ValidationErrors.vue";
import { useRegisterForm } from "../use/register-form";

const { email, password, username, onSubmit, errors } = useRegisterForm();
const store = useStore();

const validationsErrors = computed(() => {
  return store.state.auth.validationErrors;
});
</script>

<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>
          <ul class="error-messages">
            <li v-for="error in errors" :key="error">{{ error }}</li>

            <ValidationErrors
              v-if="validationsErrors"
              :validationErrors="validationsErrors"
            />
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                autocomplete="on"
                v-model="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
