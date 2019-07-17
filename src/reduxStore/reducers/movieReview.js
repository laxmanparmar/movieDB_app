import * as actionType from '../actions';


const initialState = {
    movieId : null,
    review : null,
    error : null
    
}

const movieReview = (state=initialState,action)=>
{
  
    switch (action.type)
    {
        case actionType.ADDTO_REVIEW_START:
        return {
            ...state,
            
        }
        case actionType.ADDTO_REVIEW_SUCCESS :
        return{
            ...state,
            movieId : action.review.movieId,
            review : action.review.name,
            error : null
        } 
        case actionType.ADDTO_REVIEW_FAIL :
        return{
            ...state,
            error :action.error
        } 
        
        default: return state
    }
}

export default movieReview;