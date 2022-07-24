import axios from './axios';

const getPopularTags = async (): Promise<string[]> => {
  const response = await axios.get('/tags');
  return response.data.tags;
}

export default {
  getPopularTags
}
