import axios from './axios';
import { CreateArticle, UpdateArticle, Article } from '../type/api';

const createArticle = async (articleInpute: CreateArticle):Promise<Article> => {
  const response = await axios.post(`/articles`, { article: articleInpute });
  return response.data.article;
}

const getArticle = async (slug: string): Promise<Article> => {
  const response = await axios.get(`/articles/${slug}`);
  return response.data.article;
}

const updateArticle = async (slug: string, articleInpute: UpdateArticle): Promise<Article> => {
  const response = await axios.put(`/articles/${slug}`, { article: articleInpute });
  return response.data.article;
}

const deleteArticle = (slug: string): Promise<any> => {
  return axios.delete(`/articles/${slug}`)
}

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle
}
