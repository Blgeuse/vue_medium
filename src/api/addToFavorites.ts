import axios from './axios';
import { Favorites } from '../type/api';

const addToFavorites = async (slug: string): Promise<Favorites> => {
  const response = await axios.post(`/articles/${slug}/favorite`);
  return response.data.article;
}
const removeFromFavorites = async (slug: string): Promise<Favorites> => {
  const response = await axios.delete(`/articles/${slug}/favorite`);
  return response.data.article;
}
export default {
  addToFavorites,
  removeFromFavorites,
}
