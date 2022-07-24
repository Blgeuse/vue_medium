import axios from './axios';
import { GetCommentsResponses, CreateComment, CreateCommentResponses } from '../type/api';

const getComment = async (slug: string): Promise<GetCommentsResponses> => {
  const response = await axios.get(`/articles/${slug}/comments`);
  return response.data.comments;
}

const createComment = async (comment: CreateComment, slug: string): Promise<CreateCommentResponses> => {
  const response = await axios.post(`/articles/${slug}/comments`, { comment: comment });
  return response.data.comment;
}

const deleteComment = (slug: string, id: number): Promise<any> => {
  return axios.delete(`/articles/${slug}/comments/${id}`)
}


export default {
  getComment,
  createComment,
  deleteComment,
}
