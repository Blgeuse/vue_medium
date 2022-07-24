import axios from './axios';
import { AxiosResponse } from 'axios';
import { FeedResponses } from '../type/api';

const getFeed = (apiUrl: string): Promise<AxiosResponse<FeedResponses, any>> => {
  return axios.get(apiUrl)
}

export default {
  getFeed,
}
