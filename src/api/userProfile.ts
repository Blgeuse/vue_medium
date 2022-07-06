import axios from './axios';

const getUserProfile = (slug: string) => {
  return axios.get(`/profiles/${slug}`).then(response => response.data.profile)
}

const followUserProfile = (slug: string) => {
  return axios.post(`/profiles/${slug}/follow`).then(response => response.data.profile);
}

const unFollowUserProfile= (slug: string) => {
  return axios.delete(`/profiles/${slug}/follow`).then(response => response.data.profile);
}

export default {
  getUserProfile,
  followUserProfile,
  unFollowUserProfile,
}
