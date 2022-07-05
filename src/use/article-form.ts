import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';


export function useArticleForm(edit: boolean = false,) {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const article = computed(() => {
    return store.state.article.article;
  })


  const schema = yup.object({
    title: yup.string().required("Пожалуйста ведите заголовок"),
    about: yup.string(),
    description: yup.string(),
    tagList: yup.string(),
  });

  const {handleSubmit, errors, isSubmitting} = useForm({
    validationSchema: schema,
  });

  const { value: title } = useField('title', undefined, {
    initialValue: edit ? (article.value.title || '') : "",
  });
  const { value: description } = useField('description', undefined, {
    initialValue: edit ? (article.value.description || '') : "",
  });
  const { value: body } = useField('body', undefined, {
    initialValue: edit ? (article.value.body || '') : "",
  });
  const { value: tagList } = useField('tagList', undefined, {
    initialValue: edit ? (article.value.tagList.join(' ') || '') : "",
  });

  const onSubmit = handleSubmit(async (values) => {
    values.tagList = values.tagList?.split(' ');
    if (edit) {
      store.dispatch('updateArticle', {slug: route.params.slug, articleInpute: values }).then(article => router.push({name: 'article', params: {slug: article.slug}}));
    } else {
      store.dispatch('createArticle', {articleInpute: values})
      .then(article => router.push({name: 'article', params: {slug: article.slug}}));
    }
  });

  return {
    title,
    description,
    body,
    tagList,
    errors,
    onSubmit,
    isSubmitting,
  }
}
