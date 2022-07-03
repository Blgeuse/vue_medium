import authApi from '../../api/auth';
import { AuthState, User, UpdateUser,  } from './../../type/api';
import { setItem } from '../../utils/presistanceStorage';
// SettingState
// const state: SettingState = {
//   validationErrors: null,
// }

const mutations = {
  updateCurrentUserSettingsStart(state: AuthState) {
    state.validationErrors = null;
  },
  updateCurrentUserSettingsSuccess(state: AuthState, payload: User) {
    state.currentUser = payload;
  },
  updateCurrentUseerSettingsFailure(state: AuthState, payload: object) {
    state.validationErrors =  payload;
  }
}

const actions = {
  updateCurrentUser(context: any, {currentUserInput} : {currentUserInput: UpdateUser}) {

    return new Promise(resolve => {
      authApi.updateCurrentUser(currentUserInput)
      .then(user => {
        console.log('3 success', user)
        context.commit('updateCurrentUserSettingsSuccess', user);
        setItem('accessToken', user.token);
        resolve(user)
      })
      .catch(result => {
        console.log('4 eerrr', result.response.data)
        context.commit('updateCurrentUseerSettingsFailure', result);
      })
    })
   }
}

export default {
  mutations,
  actions,
}
