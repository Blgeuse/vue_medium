import axios from './axios';

const getArticle = (slug: string) => {
  return axios.get(`/articles/${slug}`).then(response => response.data.article)
}
const deleteArticle = (slug: string) => {
  return axios.delete(`/articles/${slug}`)
}

export default {
  getArticle,
  deleteArticle,
}
