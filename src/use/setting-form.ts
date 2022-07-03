import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
import { User } from '../type/api';
import { getItem } from '../utils/presistanceStorage';

export function useSettingForm() {
  const store = useStore();
  const router = useRouter();


  const user = computed((): User  => {
    return store.state.auth.currentUser;
  })

  const schema = yup.object({
    email: yup.string().required("Пожалуйста ведите email").email("Необходимо вести корректный email"),
    username: yup.string().required("Пожалуйста ведите имя"),
    bio: yup.string(),
    image: yup.string(),
  });

  const {handleSubmit, errors, isSubmitting} = useForm({
    validationSchema: schema,
  });


  const { value: email } = useField('email', undefined, {
    initialValue: user.value.email || '',
  });
  const { value: username } = useField('username', undefined, {
    initialValue: user.value.username || '',
  });
  const { value: bio } = useField('bio', undefined, {
    initialValue: user.value.bio || '',
  });
  const { value: image } = useField('image', undefined, {
    initialValue: user.value.image || '',
  });


  const onSubmit = handleSubmit(async values => {

    store.dispatch('updateCurrentUser', {currentUserInput: {
      ...values,
      token: getItem('accessToken')
    }})
  });

  return {
    email,
    username,
    onSubmit,
    bio,
    image,
    errors,
    isSubmitting,
  }
}
