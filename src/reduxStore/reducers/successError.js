import * as actionType from '../actions';

const initialState = {
    loader: false,
    msg: '',
    showAlert: false
}

const successError = (state = initialState, action) => {

    switch (action.type) {
        case actionType.SHOW_LOADING:
            return {
                ...state,
                loader: true
            }
        case actionType.HIDE_LOADING:
            return {
                ...state,
                loader: false
            }
        case actionType.SHOW_ALERT:
            return {
                ...state,
                msg: action.msg,
                showAlert: true
            }
        case actionType.HIDE_ALERT:
            return {
                ...state,
                showAlert: false
            }
        default: return state
    }
}

export default successError;