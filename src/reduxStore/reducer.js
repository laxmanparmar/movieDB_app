import { combineReducers } from 'redux'
import movies from './reducers/movies';
import auth from './reducers/auth';
import fireBase from './reducers/fireBase';
export default combineReducers({
    movies,
    auth,
    fireBase
  
})