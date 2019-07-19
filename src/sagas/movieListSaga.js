import { put, all } from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as label from '../common/label';
import * as actionCall from './action';
import * as movieApiService from '../services/movieApiService/movieApiService';


export function* getMovies() {
  try {

    const result = yield movieApiService.latestMovieApi();

    yield put({ type: actionType.ADD_LATEST_MOVIES, movieList: result.data.results });

  } catch (e) {
    // yield  put({type: actionType.FETCH_ERROR, error: true});
  }
}

export function* getSearchedMovieResult(action) {
  try {
    const result = action.searchParam.trim() !== "" ? yield movieApiService.searchMovie(action) : yield movieApiService.latestMovieApi();

    yield put({ type: actionType.ADD_LATEST_MOVIES, movieList: result.data.results });
  } catch (e) {

  }
}

export function* getMovieObj(action) {
  try {

    const result = yield movieApiService.getMovieById(action);

    const movieObj = {
      ...result.data,
      credits: {
        cast: result.data.credits.cast.length > 5 ? result.data.credits.cast.splice(0, 5) : [...result.data.credits.cast],
        crew: result.data.credits.crew.length > 5 ? result.data.credits.crew.splice(0, 5) : [...result.data.credits.crew]
      }
    }

    yield put({ type: actionType.INSERT_MOVIE_DATA, movie: movieObj });
  } catch (e) {

  }
}


export function* giveMoviewReview(action) {
  try {
    yield movieApiService.addMoviewReview(action.data, action.data.token);

    const obj = {
      movieId: action.data.movieId,
      name: action.data.review
    }
    yield all([
      put({ type: actionType.ADDTO_REVIEW_SUCCESS, review: obj }),
      put({ type: actionType.INIT_ALERT, msg: label.SUCCESS_MSG })
    ])
  } catch (e) {
    yield all([
      put({ type: actionType.ADDTO_REVIEW_FAIL, error: e }),
      put({ type: actionType.INIT_ALERT, msg: label.ERROR })
    ])

  }
}


export function* userMovieReview(action) {
  try {
    const res = yield movieApiService.checkReviewExist(action.data.userId, action.data.token);

    const review = actionCall.getMoviewReview(res.data, action.data.movieId)

    if (review.length > 0) {
      const obj = {
        movieId: action.data.movieId,
        name: review[0]['review']
      }
      yield put({ type: actionType.ADDTO_REVIEW_SUCCESS, review: obj });
    }
  } catch (e) {
    yield put({ type: actionType.ADDTO_REVIEW_FAIL, error: e })
  }

}


