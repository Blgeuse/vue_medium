import axios from './axios';

const getArticle = (slug: string) => {
  return axios.get(`/articles/${slug}`).then(response => response.data.article)
}

export default {
  getArticle,
}
