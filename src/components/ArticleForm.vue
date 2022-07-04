<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ValidationErrors from "../components/ValidationErrors.vue";
import { useArticleForm } from "../use/article-form";
const props = defineProps<{
  edit?: boolean;
}>();
const store = useStore();
const { title, body, description, tagList, errors, onSubmit, isSubmitting } =
  useArticleForm();
const validationsErrors = computed(() => {
  return store.state.createArticle.validationErrors;
});
</script>

<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
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
                v-model.trim="title"
                type="text"
                class="form-control form-control-lg"
                placeholder="Article Title"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                v-model.trim="description"
                class="form-control"
                placeholder="What's this article about?"
              />
            </fieldset>
            <fieldset class="form-group">
              <textarea
                v-model.trim="body"
                class="form-control"
                rows="8"
                placeholder="Write your article (in markdown)"
              ></textarea>
            </fieldset>
            <fieldset class="form-group">
              <input
                type="text"
                v-model.trim="tagList"
                class="form-control"
                placeholder="Enter tags"
              />
              <div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">
              Publish Article
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
