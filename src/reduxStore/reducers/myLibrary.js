import * as actionType from '../actions';

const initialState = {
    myFavorite : [],
    myWatchList: [],
    error: null
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
        default : return state;
    }
}

export default myLibrary;