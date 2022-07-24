import axios from './axios';
import { AxiosResponse } from 'axios';
import {LoginUser, LoginUserResponses, NewUser, NewUserResponses,GetUserResponses, UpdateUser, UpdateUserResponses} from '../type/api';

const login = (credentials: LoginUser): Promise<AxiosResponse<LoginUserResponses, any>> => {
  return axios.post('/users/login', {user: credentials});
}

const register = (credentials: NewUser): Promise<AxiosResponse<NewUserResponses, any>> => {
  return  axios.post('/users', {user: credentials});
}

const getCurrentUser = (): Promise<AxiosResponse<GetUserResponses, any>> => {
  return axios.get('/user', );
}

const updateCurrentUser = async (currentUserInput: UpdateUser): Promise<UpdateUserResponses> => {
  const response = await axios
    .put('/user', { user: currentUserInput });
  return response.data.user;
}

export default {
  register,
  login,
  getCurrentUser,
  updateCurrentUser
}
