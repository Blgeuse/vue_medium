import { PopularTagsState } from "../../type/api"
import popularTagsApi from '../../api/popularTags';

const state = {
  tags: null,
  isLoading: false,
}

const mutations = {
  getPopularTagsStart(state: PopularTagsState) {
    state.isLoading = true;
    state.tags = null;
  },
  getPopularTagsSuccess(state: PopularTagsState, payload: object) {
    state.isLoading = false;
    state.tags = payload;
  },
  getPopularTagsFailure(state: PopularTagsState) {
    state.isLoading = false;
  }
}

const actions = {
  getPopularTags(context: any) {
    return new Promise(resolve => {
      context.commit('getPopularTagsStart');
      popularTagsApi.getPopularTags()
        .then(tags => {
          context.commit('getPopularTagsSuccess', tags);
          resolve(tags)
        })
        .catch(() => {
          context.commit('getPopularTagsFailure')
        })
    })
  }
}

export default {
  state,
  actions,
  mutations,
}
