import axiosFireBase from '../common/axiosFireBaseInstance';
import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';


const updateFavoriteList =(data,token)=>
{
    const formParams = {
        movieId: data.movieId,
        userId : data.userId
    }
    return axiosFireBase.post('/movieFavorites.json?auth='+token,formParams);
}

const checkFavoriteExist =(userId,token)=>
{
    const queryParams = '?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
    return axiosFireBase.get('/movieFavorites.json'+queryParams);
}


const checkMovieIdExist =(result,movieId)=>
{
    const data =  Object.keys(result).filter((val)=>{
        return result[val]["movieId"] == movieId
        })
    return data.length>0;
}

export function* favoriteListCall(action)
{
    try{
        const res = yield checkFavoriteExist(action.params.userId ,action.params.token);
        
        if(!checkMovieIdExist(res.data,action.params.movieId))
        {
            const result = yield updateFavoriteList(action.params,action.params.token);
              
            yield put({type:actionType.ADDTO_FAVORITE_SUCCESS,favorite : action,name:result.data.name})
        }
        
    }catch(e)
    {   
        yield put({type:actionType.ADDTO_FAVORITE_FAIL,error : e})
    }
    
}


const updateWatchlistList =(data,token)=>
{
    const formParams = {
        movieId: data.movieId,
        userId : data.userId
    }
    return axiosFireBase.post('/movieWatchlists.json?auth='+token,formParams);
}

const checkWatchlistExist =(userId,token)=>
{
    const queryParams = '?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
    return axiosFireBase.get('/movieWatchlists.json'+queryParams);
}


export function* watchlistListCall(action)
{
    try{
        const res = yield checkWatchlistExist(action.params.userId ,action.params.token);
        
        if(!checkMovieIdExist(res.data,action.params.movieId))
        {
            const result = yield updateWatchlistList(action.params,action.params.token);
              
            yield put({type:actionType.ADDTO_WATCHLIST_START,watchlist : action,name:result.data.name})
        }
        
    }catch(e)
    {   
        yield put({type:actionType.ADDTO_WATCHLIST_FAIL,error : e})
    }
    
}


