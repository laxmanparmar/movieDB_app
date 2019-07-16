import {takeEvery} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as sagaAction from './movieListSaga';
import * as authSagas from './authSaga';
function* indexSaga() {
    yield takeEvery( actionType.FETCH_LATEST_MOVIES, sagaAction.getMovies);
    yield takeEvery( actionType.SEARCH_MOVIE, sagaAction.getSearchedMovieResult);
    yield takeEvery( actionType.FETCH_MOVIE_DATA, sagaAction.getMovieObj);
    yield takeEvery( actionType.AUTH_START, authSagas.authLogin);
    yield takeEvery( actionType.AUTH_LOGOUT_START, authSagas.checkAuthTimeOut);
  }

  export default indexSaga;
