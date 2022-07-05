import addToFavoritesApi from "../../api/addToFavorites"
const actions = {
  addToFavorites(context: object, {slug, isFavorited} : {slug: string, isFavorited: boolean}) {
    return new Promise(resolve => {
      const promise = isFavorited
        ? addToFavoritesApi.removeFromFavorites(slug)
        : addToFavoritesApi.addToFavorites(slug);
      promise.then(article => resolve(article))
    })
  }
}

export default {
  actions,
}
