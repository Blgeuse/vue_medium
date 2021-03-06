import { FeedState } from "../../type/state"
import { FeedResponses } from "../../type/api";
import feedApi from '../../api/feed';

const state = {
  data: null,
  isLoading: false,
}

const mutations = {
  getFeedStart(state: FeedState) {
    state.isLoading = true;
    state.data = null;
  },
  getFeedSuccess(state: FeedState, payload: FeedResponses) {
    state.isLoading = false;
    state.data = payload;
  },
  getFeedFailure(state: FeedState) {
    state.isLoading = false;
  }
}

const actions = {
  getFeed(context: any, {apiUrl}: {apiUrl: string}) {
    return new Promise(resolve => {
      context.commit('getFeedStart');
      feedApi.getFeed(apiUrl)
        .then(response => {
          context.commit('getFeedSuccess', response.data);
          resolve(response.data)
        })
        .catch(() => {
          context.commit('getFeedFailure')
        })
    })
  }
}

export default {
  state,
  actions,
  mutations,
}
