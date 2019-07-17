import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as actionCall from './action';

export function* favoriteListCall(action)
{
    try{
        const res = yield actionCall.checkFavoriteExist(action.params.userId ,action.params.token);
        
        if(!actionCall.checkMovieIdExist(res.data,action.params.movieId))
        {
            const result = yield actionCall.updateFavoriteList(action.params,action.params.token);
              
            yield put({type:actionType.ADDTO_FAVORITE_SUCCESS,favorite : action,name:result.data.name})
        }
        
    }catch(e)
    {   
        yield put({type:actionType.ADDTO_FAVORITE_FAIL,error : e})
    }
    
}

export function* watchlistListCall(action)
{
    try{
        const res = yield actionCall.checkWatchlistExist(action.params.userId ,action.params.token);
        
        if(!actionCall.checkMovieIdExist(res.data,action.params.movieId))
        {
            const result = yield actionCall.updateWatchlistList(action.params,action.params.token);
              
            yield put({type:actionType.ADDTO_WATCHLIST_START,watchlist : action,name:result.data.name})
        }
        
    }catch(e)
    {   
        yield put({type:actionType.ADDTO_WATCHLIST_FAIL,error : e})
    }
    
}


