import axios from './axios';
import { UserProfile } from '../type/api';

const getUserProfile = async (slug: string): Promise<UserProfile> => {
  const response = await axios.get(`/profiles/${slug}`);
  return response.data.profile;
}

const followUserProfile = async (slug: string): Promise<UserProfile> => {
  const response = await axios.post(`/profiles/${slug}/follow`);
  return response.data.profile;
}

const unFollowUserProfile= async (slug: string): Promise<UserProfile> => {
  const response = await axios.delete(`/profiles/${slug}/follow`);
  return response.data.profile;
}

export default {
  getUserProfile,
  followUserProfile,
  unFollowUserProfile,
}
