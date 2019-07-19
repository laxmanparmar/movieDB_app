import { takeEvery } from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as sagaAction from './movieListSaga';
import * as authSagas from './authSaga';
import * as fireBaseSagas from './fireBaseAPISaga';
import * as myLibrarySaga from './myLibrarySaga';
import * as successSaga from './successErrorSaga';

function* indexSaga() {
  yield takeEvery(actionType.FETCH_LATEST_MOVIES, sagaAction.getMovies);
  yield takeEvery(actionType.SEARCH_MOVIE, sagaAction.getSearchedMovieResult);
  yield takeEvery(actionType.FETCH_MOVIE_DATA, sagaAction.getMovieObj);

  yield takeEvery(actionType.AUTH_START, authSagas.authLogin);
  yield takeEvery(actionType.AUTH_LOGOUT_START, authSagas.checkAuthTimeOut);
  

  yield takeEvery(actionType.ADDTO_FAVORITE_START, fireBaseSagas.favoriteListCall);
  yield takeEvery(actionType.ADDTO_WATCHLIST_START, fireBaseSagas.watchlistListCall);

  yield takeEvery(actionType.ADDTO_REVIEW_START, sagaAction.giveMoviewReview);
  yield takeEvery(actionType.FETCH_USER_REVIEW, sagaAction.userMovieReview);

  yield takeEvery(actionType.FETCH_MYFAVORITE_START, myLibrarySaga.myFavorite);
  yield takeEvery(actionType.FETCH_WATCHLIST_START, myLibrarySaga.myWatchList);

  yield takeEvery(actionType.REMOVE_FAV_START, myLibrarySaga.removeFav);
  yield takeEvery(actionType.REMOVE_WATCH_START, myLibrarySaga.removeWatch);


  yield takeEvery(actionType.INIT_ALERT, successSaga.initAlert);

}

export default indexSaga;
