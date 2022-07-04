import articleApi from '../../api/article';
import {CreateArticleState} from '../../type/api';

const state: CreateArticleState = {
  validationErrors: null,
}

const mutations = {
  createArticleFailure(state: CreateArticleState, payload: object){
    state.validationErrors = payload
  }
}

const actions = {
  createArticle(context: any, {articleInpute} : {articleInpute: object}) {
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
