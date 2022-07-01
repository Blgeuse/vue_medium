import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export function useRegisterForm() {
  const store = useStore();
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().required("Пожалуйста ведите email").email("Необходимо вести корректный email"),
    username: yup.string().required("Пожалуйста ведите имя"),
    password: yup.string().required("Пожалуйста ведите пароль").min(8, "пароль не может быть меньше 8 символов"),
  });

  const {handleSubmit, errors, isSubmitting} = useForm({
    validationSchema: schema,
  });
  const { value: email } = useField('email');
  const { value: password } = useField('password');
  const { value: username } = useField('username');

  const onSubmit = handleSubmit(async values => {
    store.dispatch('register', values)
      .then(user => {
        router.push('/');
      })
  });

  return {
    email,
    password,
    username,
    onSubmit,
    errors,
    isSubmitting,
  }

}
