import axios from './axios';

const getUserProfile = (slug: string) => {
  return axios.get(`/profiles/${slug}`).then(response => response.data.profile)
}

export default {
  getUserProfile,
}
