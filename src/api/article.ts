import axios from './axios';

const getArticle = (slug: string) => {
  return axios.get(`/articles/${slug}`).then(response => response.data.article)
}
const deleteArticle = (slug: string) => {
  return axios.delete(`/articles/${slug}`)
}

const createArticle = (articleInpute: object) => {
  return axios.post(`/articles`, {article: articleInpute})
              .then(response => response.data.article)
}

const updateArticle = (slug: string, articleInpute: object) => {
  return axios.put(`/articles/${slug}`, {article: articleInpute})
              .then(response => response.data.article)
}

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle
}
