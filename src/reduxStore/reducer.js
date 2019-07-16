import { combineReducers } from 'redux'
import movies from './reducers/movies';
import auth from './reducers/auth';

export default combineReducers({
    movies,
    auth
  
})