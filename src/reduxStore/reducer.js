import { combineReducers } from 'redux'
import movies from './reducers/movies';
import auth from './reducers/auth';
import fireBase from './reducers/fireBase';
import movieReview from './reducers/movieReview';
import myLibrary from './reducers/myLibrary';
import successError from './reducers/successError';

export default combineReducers({
    movies,
    auth,
    fireBase,
    movieReview,
    myLibrary,
    successError
})