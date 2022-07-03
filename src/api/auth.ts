import axios from './axios';
import {NewUser, LoginUser, UpdateUser} from '../type/api';

const register = (credentials: NewUser) => {
  return  axios.post('/users', {user: credentials});
}
const login = (credentials: LoginUser) => {
  return  axios.post('/users/login', {user: credentials});
}

const getCurrentUser = () => {
  return axios.get('/user', );
}

const updateCurrentUser = (currentUserInput: UpdateUser) => {
  return axios
    .put('/user', {user: currentUserInput})
    .then(response => response.data.user)
}

export default {
  register,
  login,
  getCurrentUser,
  updateCurrentUser
}
