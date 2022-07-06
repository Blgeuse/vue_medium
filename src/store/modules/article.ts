import { articleState } from "../../type/api"
import articleApi from '../../api/article';

const state = {
  article: null,
  isLoading: false,
}

const mutations = {
  getArticleStart(state: articleState) {
    state.isLoading = true;
    state.article = null;
  },
  getArticleSuccess(state: articleState, payload: object) {
    state.isLoading = false;
    state.article = payload;
  },
  getArticleFailure(state: articleState) {
    state.isLoading = false;
  },

  deleteArticleStart() {},
  deleteArticleSuccess() {},
  deleteArticleFailure() {},
}

const actions = {
  getArticle(context: any, {slug}: {slug: string}) {
    return new Promise(resolve => {
      context.commit('getArticleStart');
      articleApi.getArticle(slug)
        .then((article: object) => {
          context.commit('getArticleSuccess', article);
          resolve(article)
        })
        .catch(() => {
          context.commit('getArticleFailure');
        })
    })
  },

  deleteArticle(context: any, {slug}: {slug: string}) {
    return new Promise(resolve => {
      context.commit('deleteArticleStart');
      articleApi.deleteArticle(slug)
        .then(_ => {
          context.commit('deleteArticleSuccess');
          resolve(_);
        })
        .catch(() => {
          context.commit('deleteArticleFailure');
        })
    })
  },
}

export default {
  state,
  actions,
  mutations,
}
