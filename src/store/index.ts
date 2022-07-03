import {createStore} from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed';
import settings from './modules/settings';
import popularTags from './modules/popularTags';

export default createStore({
  modules: {
    auth,
    feed,
    settings,
    popularTags,
  }
})
