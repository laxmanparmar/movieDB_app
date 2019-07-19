import { put, all } from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';
import * as authService from '../services/authService/authService';

export function* checkAuthTimeOut(data) {

    yield actionCall.delay(data.time * 1000);

    yield put({ type: actionType.AUTH_LOGOUT });

    actionType.removeUserOnLogout();
}


export function* authLogin(userData) {
    try {
        const result = yield authService.authApi(userData.data, userData.isSignIn);
        
        yield all([
            put({ type: actionType.AUTH_LOGOUT_START, time: result.data.expiresIn }),
            put({ type: actionType.AUTH_SUCCESS, data: result.data })
        ])

        authService.setToLocal(result.data);
    } catch (e) {
        yield put({ type: actionType.AUTH_FAIL, error: e.response.data.error })
    }
}


