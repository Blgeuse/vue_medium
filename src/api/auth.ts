import axios from './axios';
import {NewUser, LoginUser} from '../type/api';

const register = (credentials: NewUser) => {
  return  axios.post('/users', {user: credentials});
}
const login = (credentials: LoginUser) => {
  return  axios.post('/users/login', {user: credentials});
}

const getCurrentUser = () => {
  return axios.get('/user');
}

export default {
  register,
  login,
  getCurrentUser
}
