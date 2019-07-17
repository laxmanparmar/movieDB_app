import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';
import {put} from 'redux-saga/effects';

export function* myFavorite(params){
    
    try{
        const result= yield actionCall.checkFavoriteExist(params.data.userId,params.data.token);
        
        yield put({type:actionType.FETCH_MYFAVORITE_SUCCESS,myFavorite:Object.values(result.data)})
    }catch(e)
    {
        yield put({type:actionType.FETCH_MYFAVORITE_FAIL,error:e.error})
    }
}