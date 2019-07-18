import * as actionType from '../actions';

const initialState = {
    myFavorite : [],
    myWatchList: [],
    error: null
}

const removeFromListByStoreId = (list,storeId) =>
{
    const newList= list.filter(el => el.storeId!==storeId);
   
    return newList;
}

const myLibrary = (state=initialState,action) =>
{
    switch(action.type)
    {
        case actionType.FETCH_MYFAVORITE_START :
        return {
            ...state
        }
        case actionType.FETCH_MYFAVORITE_SUCCESS :
        return {
            ...state,
            myFavorite : action.myFavorite,
            error:null
        }
        case actionType.FETCH_MYFAVORITE_FAIL :
        return {
            ...state,
            error :action.error
        }
        case actionType.FETCH_WATCHLIST_START :
        return {
            ...state
        }
        case actionType.FETCH_WATCHLIST_SUCCESS :
        return {
            ...state,
            myWatchList : action.myWatchList,
            error:null
        }
        case actionType.FETCH_WATCHLIST_FAIL :
        return {
            ...state,
            error :action.error
        }
        case actionType.REMOVE_FAV_START :
        return {
            ...state
        }
        case actionType.REMOVE_FAV_SUCCESS :
        return {
            ...state,
            myFavorite : removeFromListByStoreId(state.myFavorite,action.storeId),
            error:null
        }
        case actionType.REMOVE_FAV_FAIL :
        return {
            ...state,
            error :action.error
        }

        case actionType.REMOVE_WATCH_START :
        return {
            ...state
        }
        case actionType.REMOVE_WATCH_SUCCESS :
        return {
            ...state,
            myWatchList : removeFromListByStoreId(state.myWatchList,action.storeId),
            error:null
        }
        case actionType.REMOVE_WATCH_FAIL:
        return {
            ...state,
            error :action.error
        }

        default : return state;
    }
}

export default myLibrary;