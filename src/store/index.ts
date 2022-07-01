import {createStore} from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed'

export default createStore({
  modules: {
    auth,
    feed,
  }
})
