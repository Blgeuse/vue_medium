import axios from 'axios';
import { getItem } from '../utils/presistanceStorage';

const requestAxios = axios.create({
  baseURL: 'https://api.realworld.io/api',
})

requestAxios.interceptors.request.use(config => {
  const token = getItem('accessToken');
  const authorizationToken = token ? `Token ${token}` : '';
  config.headers.Authorization = authorizationToken;
  return config;
})


export default requestAxios
