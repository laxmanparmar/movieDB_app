import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';
import { put, all } from 'redux-saga/effects';
import * as label from '../common/label';
import * as fireBaseService from '../services/fireBaseService/fireBaseService';

export function* myFavorite(params) {
    try {
        const result = yield fireBaseService.checkFavoriteExist(params.data.userId, params.data.token);

        yield put({ type: actionType.FETCH_MYFAVORITE_SUCCESS, myFavorite: actionCall.processData(result.data) })
    } catch (e) {
        yield put({ type: actionType.FETCH_MYFAVORITE_FAIL, error: e.error })
    }
}

export function* myWatchList(params) {
    try {
        const result = yield fireBaseService.checkWatchlistExist(params.data.userId, params.data.token);
        yield put({ type: actionType.FETCH_WATCHLIST_SUCCESS, myWatchList: actionCall.processData(result.data) })
    } catch (e) {
        yield put({ type: actionType.FETCH_WATCHLIST_FAIL, error: e.error })
    }
}


export function* removeFav(params) {
    try {
        yield fireBaseService.removeFavorite(params.data.token, params.data.storeId);
        yield all([
            put({ type: actionType.REMOVE_FAV_SUCCESS, storeId: params.data.storeId }),
            put({ type: actionType.INIT_ALERT, msg: label.SUCCESS_REMOVED })
        ])
    } catch (e) {
        yield all([
            put({ type: actionType.REMOVE_FAV_FAIL, error: e.error }),
            put({ type: actionType.INIT_ALERT, msg: label.ERROR })
        ])
    }
}

export function* removeWatch(params) {
    try {
        yield fireBaseService.removeWatchlist(params.data.token, params.data.storeId);
        yield all([
            put({ type: actionType.REMOVE_WATCH_SUCCESS, storeId: params.data.storeId }),
            put({ type: actionType.INIT_ALERT, msg: label.SUCCESS_REMOVED })
        ])
    } catch (e) {
        yield all([
            put({ type: actionType.REMOVE_WATCH_FAIL, error: e.error }),
            put({ type: actionType.INIT_ALERT, msg: label.ERROR })
        ])
    }
}