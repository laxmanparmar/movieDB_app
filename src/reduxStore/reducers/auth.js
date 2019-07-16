import * as actionType from '../actions';

const initialState = {
    token:null,
    userId:null,
    
    error:null,
    loading: false
}

const auth = (state=initialState,action)=>
{
  
    switch (action.type)
    {   
        case actionType.AUTH_START:
        return{
            ...state,
            loading: true
        }
        case actionType.AUTH_SUCCESS:
        return{
            ...state,
            token : action.data.idToken,
           
            userId: action.data.localId,
            error:null,
            loading: false
        }
        case actionType.AUTH_FAIL:
        return{
            ...state,
            error:action.error,
            loading: false
        }
        case actionType.AUTH_LOGOUT:
        return{
            ...state,
            error:null,
            loading: false,
            token:null,
            userId:null
        }
        default :return state
    }

}

export default auth;