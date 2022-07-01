import axios from './axios';

const getFeed = (apiUrl: string) => {
  return axios.get(apiUrl)
}

export default {
  getFeed,
}
