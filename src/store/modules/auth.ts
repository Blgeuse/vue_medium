import authApi from '../../api/auth';
import { setItem } from '../../utils/presistanceStorage';
import {NewUser, UpdateUser, User, AuthState, LoginUser} from '../../type/api';

const state: AuthState = {
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const mutations = {
  registerStart(state: AuthState) {
    state.validationErrors = null;
  },
  registerSuccess(state: AuthState, payload: User) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  registerFailure(state: AuthState, payload: object) {
    state.validationErrors = payload;
    state.isLoggedIn = false;
  },

  loginStart(state: AuthState) {
    state.validationErrors = null;
  },
  loginSuccess(state: AuthState, payload: User) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  loginFailure(state: AuthState, payload: object) {
    state.validationErrors = payload;
    state.isLoggedIn = false;
  },

  getCurrentUserStart(state: AuthState) {
    state.validationErrors = null;
  },
  getCurrentUserSuccess(state: AuthState, payload: User) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  getCurrentUserFailure(state: AuthState, payload: object) {
    state.validationErrors = payload;
    state.currentUser = null;
    state.isLoggedIn = false;
  },

  updateCurrentUserSettingsSuccess(state: AuthState, payload: User) {
    state.currentUser = payload;
  },
}

const actions = {
 register(context: any, credentials: NewUser) {
  return new Promise(resolve => {
    context.commit('registerStart');
    authApi.register(credentials)
    .then(response => {
      context.commit('registerSuccess', response.data.user);
      setItem('accessToken', response.data.user.token);
      resolve(response.data.user)
    })
    .catch(result => {
      context.commit('registerFailure', result.response.data.errors);
    })
  })
 },

 login(context: any, credentials: LoginUser) {
  return new Promise(resolve => {
    context.commit('loginStart');
    authApi.login(credentials)
    .then(response => {
      context.commit('loginSuccess', response.data.user);
      setItem('accessToken', response.data.user.token);
      resolve(response.data.user)
    })
    .catch(result => {
      context.commit('loginFailure', result.response.data.errors);
    })
  })
 },

 getCurrentUser(context: any,) {
  return new Promise(resolve => {
    context.commit('getCurrentUserStart');
    authApi.getCurrentUser()
    .then(response => {
      context.commit('getCurrentUserSuccess', response.data.user);
      resolve(response.data.user)
    })
    .catch(() => {
      context.commit('getCurrentUserFailure');
    })
  })
 },
 updateCurrentUser(context: any, {currentUserInput} : {currentUserInput: UpdateUser}) {

  return new Promise(resolve => {
    authApi.updateCurrentUser(currentUserInput)
    .then(user => {
      context.commit('updateCurrentUserSettingsSuccess', user);
      setItem('accessToken', user.token);
      resolve(user)
    })
    .catch(result => {
      context.commit('updateCurrentUseerSettingsFailure', result.response.data);
    })
  })
 }
}

export default {
  state,
  mutations,
  actions
}
