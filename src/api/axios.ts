import axios from 'axios';
import { getItem } from '../utils/presistanceStorage';
import { API_URL } from '../utils/constants';

const requestAxios = axios.create({
  baseURL: API_URL,
})

requestAxios.interceptors.request.use(config => {
  const token = getItem('accessToken');
  const authorizationToken = token ? `Token ${token}` : '';
  if (config.headers) {
      config.headers.Authorization = authorizationToken;
  }
  return config;
})


export default requestAxios
