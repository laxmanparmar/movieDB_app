import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* initAlert(data)
{
    yield  put({type:actionType.SHOW_ALERT,msg:data.msg});

    yield delay(200);
    
    yield  put({type:actionType.HIDE_ALERT});

  
}