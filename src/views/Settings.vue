<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { useSettingForm } from "../use/setting-form";
import ValidationErrors from "../components/ValidationErrors.vue";

const store = useStore();

const { email, username, bio, image, onSubmit, errors, isSubmitting } =
  useSettingForm();

const validationsErrors = computed(() => {
  return store.state.auth.validationErrors;
});
</script>

<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages">
            <li v-for="error in errors" :key="error">{{ error }}</li>
            <ValidationErrors
              v-if="validationsErrors"
              :validationErrors="validationsErrors"
            />
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model.trim="image"
                  type="text"
                  placeholder="URL of profile picture"
                  class="form-control"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model.trim="username"
                  type="text"
                  placeholder="Your Name"
                  class="form-control form-control-lg"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model.trim="bio"
                  rows="8"
                  placeholder="Short bio about you"
                  class="form-control form-control-lg"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model.trim="email"
                  type="text"
                  placeholder="Email"
                  class="form-control form-control-lg"
                />
              </fieldset>
              <button
                :disabled="isSubmitting"
                class="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
