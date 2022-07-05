import {createStore} from 'vuex';
import auth from './modules/auth';
import feed from './modules/feed';
import settings from './modules/settings';
import popularTags from './modules/popularTags';
import article from './modules/article';
import createArticle from './modules/createArticle';
import editArtcile from './modules/editArticle';
import addToFavorites from './modules/addToFavorites';
import userProfile from './modules/userProfile';

export default createStore({
  modules: {
    auth,
    feed,
    settings,
    popularTags,
    article,
    createArticle,
    editArtcile,
    addToFavorites,
    userProfile,
  }
})
