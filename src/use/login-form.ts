import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export function useLoginForm() {
  const store = useStore();
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().required("Пожалуйста ведите email").email("Необходимо вести корректный email"),
    password: yup.string().required("Пожалуйста ведите пароль").min(8, "пароль не может быть меньше 8 символов"),
  });

  const {handleSubmit, errors} = useForm({
    validationSchema: schema,
  });
  const { value: email } = useField('email');
  const { value: password } = useField('password');

  const onSubmit = handleSubmit(async values => {
    store.dispatch('login', values)
    .then(() => {
      router.push('/');
    })
  });

  return {
    email,
    password,
    onSubmit,
    errors
  }

}
