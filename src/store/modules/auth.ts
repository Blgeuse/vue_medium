import authApi from '../../api/auth';
import { setItem } from '../../utils/presistanceStorage';
import {NewUser, User, AuthState, LoginUser} from '../../type/api';

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
  },

  loginStart(state: AuthState) {
    state.validationErrors = null;
  },
  loginSuccess(state: AuthState,  payload: User) {
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  loginFailure(state: AuthState, payload: object) {
    state.validationErrors = payload;
  }
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
 }
}

export default {
  state,
  mutations,
  actions
}
