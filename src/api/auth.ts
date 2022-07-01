import axios from './axios';
import {NewUser} from '../type/api';

const register = (credentials: NewUser) => {
  return  axios.post('/users', {user: credentials});
}

export default {
  register,
}
