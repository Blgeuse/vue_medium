import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';


export function useArticleForm(edit?: boolean) {
  const store = useStore();
  const router = useRouter();


  const schema = yup.object({
    title: yup.string().required("Пожалуйста ведите заголовок"),
    about: yup.string(),
    description: yup.string(),
    tagList: yup.string(),
  });

  const {handleSubmit, errors, isSubmitting} = useForm({
    validationSchema: schema,
  });

  const { value: title } = useField('title');
  const { value: description } = useField('description');
  const { value: body } = useField('body', undefined, {
    initialValue: '',
  });
  const { value: tagList } = useField('tagList');

  const onSubmit = handleSubmit(async (values) => {
    values.tagList = values.tagList?.split(' ');
    store.dispatch('createArticle', {articleInpute: values})
      .then(article => router.push({name: 'article', params: {slug: article.slug}}));
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
