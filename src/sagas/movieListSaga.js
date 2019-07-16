import axios from '../common/axiosInstance';
import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as api from '../common/movieDbApi';

const latestMovieApi=()=>{
   
    return axios.get(`/movie/popular?api_key=${api.api}&language=en-US&include_adult=false`);
   
}

const searchMovie= (action) =>
{
  return axios.get(`/search/movie?api_key=${api.api}&language=en-US&query=${action.searchParam}&include_adult=false`);
}

const getMovieById = (action) =>
{
  return axios.get(`/movie/${action.movieId}?api_key=${api.api}&language=en-US&append_to_response=credits&include_adult=false`);
}


export function* getMovies()
{
    try {
       
        const result = yield latestMovieApi();
      
        yield  put({type: actionType.ADD_LATEST_MOVIES, movieList: result.data.results});
      
     } catch (e) {
       // yield  put({type: actionType.FETCH_ERROR, error: true});
     }
}

export function* getSearchedMovieResult(action)
{
  try{
    const result = action.searchParam.trim()!== "" ? yield searchMovie(action) : yield latestMovieApi() ;
      
    yield  put({type: actionType.ADD_LATEST_MOVIES, movieList: result.data.results});
  }catch(e){

  }
}

export function* getMovieObj(action)
{
  try{
    
    const result = yield getMovieById(action);
    
    const movieObj ={
      ...result.data,
      credits:{
        cast : result.data.credits.cast.length>5?result.data.credits.cast.splice(0,5): [...result.data.credits.cast],
        crew : result.data.credits.crew.length>5? result.data.credits.crew.splice(0,5) : [...result.data.credits.crew]
      }
    }
   
    yield  put({type: actionType.INSERT_MOVIE_DATA, movie: movieObj});
  }catch(e)
  {

  }
}


