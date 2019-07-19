import { put, all } from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';
import * as label from '../common/label';
import * as fireBaseService from '../services/fireBaseService/fireBaseService';

export function* favoriteListCall(action) {
    try {
        const res = yield fireBaseService.checkFavoriteExist(action.params.userId, action.params.token);

        if (!actionCall.checkMovieIdExist(res.data, action.params.movieId)) {
            const result = yield fireBaseService.updateFavoriteList(action.params, action.params.token);

            yield all([
                put({ type: actionType.ADDTO_FAVORITE_SUCCESS, favorite: action, name: result.data.name }),
                put({ type: actionType.INIT_ALERT, msg: label.SUCCESS_FAV })
            ])
        } else {
            yield put({ type: actionType.INIT_ALERT, msg: label.Exist });
        }

    } catch (e) {
        yield all([
            put({ type: actionType.ADDTO_FAVORITE_FAIL, error: e }),
            put({ type: actionType.INIT_ALERT, msg: label.ERROR })
        ])

    }

}

export function* watchlistListCall(action) {
    try {
        const res = yield fireBaseService.checkWatchlistExist(action.params.userId, action.params.token);

        if (!actionCall.checkMovieIdExist(res.data, action.params.movieId)) {
            const result = yield fireBaseService.updateWatchlistList(action.params, action.params.token);

            yield all([
                put({ type: actionType.ADDTO_WATCHLIST_SUCCESS, watchlist: action, name: result.data.name }),
                put({ type: actionType.INIT_ALERT, msg: label.SUCCESS_Watch })
            ])

        } else {
            yield put({ type: actionType.INIT_ALERT, msg: label.Exist });
        }

    } catch (e) {
        yield all([
            put({ type: actionType.ADDTO_WATCHLIST_FAIL, error: e }),
            put({ type: actionType.INIT_ALERT, msg: label.ERROR })
        ])

    }

}


