import { put } from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';

export function* initAlert(data) {
    yield put({ type: actionType.SHOW_ALERT, msg: data.msg });

    yield actionCall.delay(200);

    yield put({ type: actionType.HIDE_ALERT });


}