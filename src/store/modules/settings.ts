import { SettingState } from './../../type/api';

const state: SettingState = {
  validationErrors: null,
}

const mutations = {
  updateCurrentUserSettingsStart(state: SettingState) {
    state.validationErrors = null;
  },
  updateCurrentUseerSettingsFailure(state: SettingState, payload: object) {
    state.validationErrors =  payload;
  }
}

export default {
  mutations,
}
