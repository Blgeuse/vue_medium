import articleApi from '../../api/article';
import { EditArticleState } from '../../type/state';
import { UpdateArticle, ResponsesErrors } from '../../type/api';

const state: EditArticleState = {
  validationErrors: null,
  isLoading: false,
  article: null,
}

const mutations = {
  updateArticleFailure(state: EditArticleState, payload: ResponsesErrors){
    state.validationErrors = payload
  }
}

const actions = {
  updateArticle(context: any, {slug, articleInpute} : {articleInpute: UpdateArticle, slug: string}) {
    return new Promise(resolve => {
      articleApi.updateArticle(slug, articleInpute)
      .then(article => {
        resolve(article)
      })
      .catch(resuslt => {
        context.commit(
          'updateArticleFailure',
          resuslt.response.data.errors
        );
      })
    })
   },
}




export default {
  state,
  mutations,
  actions,
}
