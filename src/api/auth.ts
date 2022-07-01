import axios from './axios';
import {NewUser, LoginUser} from '../type/api';

const register = (credentials: NewUser) => {
  return  axios.post('/users', {user: credentials});
}
const login = (credentials: LoginUser) => {
  return  axios.post('/users/login', {user: credentials});
}

export default {
  register,
  login
}
