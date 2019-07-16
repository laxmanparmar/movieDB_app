import * as actionType from '../actions';


const initialState = {
    movieList : [],
    spinner : false,
    movie :{}
    
}

const movies = (state=initialState,action)=>
{
  
    switch (action.type)
    {
        case actionType.ADD_LATEST_MOVIES:
        return {
            ...state,
            movieList : [...action.movieList],
            spinner : false
        }
        case actionType.SEARCH_MOVIE :
        return{
            ...state,
            spinner :true
        } 
        case actionType.FETCH_LATEST_MOVIES :
        return{
            ...state,
            spinner :true
        } 
        case actionType.FETCH_MOVIE_DATA :
        return{
            ...state,
            spinner :true
        }
        case actionType.INSERT_MOVIE_DATA:
        return{
            ...state,
            movie:{...action.movie},
            spinner : false
        }
        default: return state
    }
}

export default movies;