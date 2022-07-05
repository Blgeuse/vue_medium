import { UserProfileState } from "../../type/api"
import userProfileApi from '../../api/userProfile';

const state = {
  user: null,
  isLoading: false,
}

const mutations = {
  getUserProfileStart(state: UserProfileState) {
    state.isLoading = true;
    state.user = null;
  },
  getUserProfileSuccess(state: UserProfileState, payload: object) {
    state.isLoading = false;
    state.user = payload;
  },
  getUserProfileFailure(state: UserProfileState) {
    state.isLoading = false;
  }
}

const actions = {
  getUserProfile(context: any, {slug}: {slug: string}) {
    return new Promise(resolve => {
      context.commit('getUserProfileStart');
      userProfileApi.getUserProfile(slug)
        .then(uesr => {
          context.commit('getUserProfileSuccess', uesr);
          resolve(uesr)
        })
        .catch(() => {
          context.commit('getUserProfileFailure')
        })
    })
  }
}

export default {
  state,
  actions,
  mutations,
}
