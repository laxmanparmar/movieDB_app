import * as actionType from '../actions';


const initialState = {
    favorite: [],
    watchlist :[],
    loading:false,
    error:null,
    name:null
    
}

const movies = (state=initialState,action)=>
{
  
    switch (action.type)
    {
        case actionType.ADDTO_FAVORITE_START:
        return {
            ...state,
            loading : true
        }
        case actionType.ADDTO_FAVORITE_SUCCESS :
        return{
            ...state,
            favorite :[...state.favorite,{...action.favorite}],
            error:null,
            loading:false,
            name : action.name
        } 
        case actionType.ADDTO_FAVORITE_FAIL :
        return{
            ...state,
            error :action.error
        } 
        
        case actionType.ADDTO_WATCHLIST_START:
        return {
            ...state,
            loading : true
        }
        case actionType.ADDTO_WATCHLIST_SUCCESS :
        return{
            ...state,
            watchlist :[...state.watchlist,{...action.watchlist}],
            error:null,
            loading:false,
            name : action.name
        } 
        case actionType.ADDTO_WATCHLIST_FAIL :
        return{
            ...state,
            error :action.error
        } 

        default: return state
    }
}

export default movies;