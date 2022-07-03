import {createStore} from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed';
import settings from './modules/settings';

export default createStore({
  modules: {
    auth,
    feed,
    settings,
  }
})
