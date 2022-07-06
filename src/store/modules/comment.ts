import {CommentState, Comment} from '../../type/api';
import commentApi from '../../api/comment';

const state: CommentState = {
  comments: null,
  isLoading: false,
}

const mutations = {
  getCommentStart(state: CommentState) {
    state.isLoading = true;
    state.comments = null;
  },
  getCommentSuccess(state: CommentState, payload: object) {
    state.isLoading = false;
    state.comments = payload;
  },
  getCommentFailure(state: CommentState) {
    state.isLoading = false;
  },


  createCommentStart() {},
  createCommentSuccess(state: CommentState, comment: Comment) {
    if (Array.isArray(state.comments)){
      state.comments.unshift(comment);
    }
  },
  createCommentFailure() {},

  deleteCommentStart() {},
  deleteCommentSuccess(state: CommentState, id: number) {
    if (Array.isArray(state.comments)){
      state.comments = state.comments.filter(c => c.id !== id)
    }
  },
  deleteCommentFailure() {},
}

const actions = {
  getComment(context: any, {slug}: {slug: string}) {
    return new Promise(resolve => {
      context.commit('getCommentStart');
      commentApi.getComment(slug)
        .then((comment: object) => {
          context.commit('getCommentSuccess', comment);
          resolve(comment)
        })
        .catch(() => {
          context.commit('getCommentFailure');
        })
    })
  },
  createComment(context: any, {slug, comment} : {slug: string, comment: object}) {
    context.commit('createCommentStart', comment)
    return new Promise(resolve => {
      commentApi.createComment(comment, slug)
        .then(comment => {
          context.commit('createCommentSuccess', comment)
          resolve(comment)
        })

    })
  },

  deleteComment(context: any, {slug, id}: {slug: string, id: number}) {
    return new Promise(resolve => {
      context.commit('deleteCommentStart');
      commentApi.deleteComment(slug, id)
        .then(_ => {
          context.commit('deleteCommentSuccess', id);
          resolve(_);
        })
        .catch(() => {
          context.commit('deleteCommentFailure');
        })
    })
  },
}


export default {
  state,
  mutations,
  actions
}
