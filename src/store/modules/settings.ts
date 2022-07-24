import { ResponsesErrors } from '../../type/api';
import { SettingState } from './../../type/state';

const state: SettingState = {
  validationErrors: null,
}

const mutations = {
  updateCurrentUserSettingsStart(state: SettingState) {
    state.validationErrors = null;
  },
  updateCurrentUseerSettingsFailure(state: SettingState, payload: ResponsesErrors) {
    state.validationErrors =  payload;
  }
}

export default {
  state,
  mutations,
}
