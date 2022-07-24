import articleApi from '../../api/article';
import {CreateArticleState} from '../../type/state';
import { CreateArticle, ResponsesErrors } from '../../type/api';

const state: CreateArticleState = {
  validationErrors: null,
}

const mutations = {
  createArticleFailure(state: CreateArticleState, payload: ResponsesErrors){
    state.validationErrors = payload
  }
}

const actions = {
  createArticle(context: any, {articleInpute} : {articleInpute: CreateArticle}) {
    return new Promise(resolve => {
      articleApi.createArticle(articleInpute)
      .then(article => {
        resolve(article)
      })
      .catch(resuslt => {
        context.commit('createArticleFailure', resuslt.response.data.errors);
      })
    })
   },
}




export default {
  state,
  mutations,
  actions,
}
