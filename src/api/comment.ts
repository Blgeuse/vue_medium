import axios from './axios';

const getComment = (slug: string) => {
  return axios.get(`/articles/${slug}/comments`).then(response => response.data.comments)
}

const deleteComment = (slug: string, id: number) => {
  return axios.delete(`/articles/${slug}/comments/${id}`)
}

const createComment = (comment: object, slug: string) => {
  return axios.post(`/articles/${slug}/comments`, {comment: comment})
              .then(response => response.data.comment)
}

export default {
  getComment,
  deleteComment,
  createComment,
}
