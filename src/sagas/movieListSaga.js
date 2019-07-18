import axios from '../common/axiosInstance';
import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';
import * as api from '../common/movieDbApi';
import axiosFireBase from '../common/axiosFireBaseInstance';
import * as label from '../common/label';

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


const addMoviewReview = (params,token)=>
{
    const formParams = {
                  movieId: params.movieId,
                  userId : params.userId,
                  review : params.review
                      }
    return axiosFireBase.post('/movieReview.json?auth='+token,formParams);
}

export function* giveMoviewReview(action)
{ 
    try{
      yield addMoviewReview(action.data,action.data.token);
      
      const obj ={
        movieId : action.data.movieId,
        name : action.data.review
      }

      yield put({type:actionType.ADDTO_REVIEW_SUCCESS,review : obj});
      yield put({type:actionType.INIT_ALERT,msg:label.SUCCESS_MSG});
    }catch(e)
    {
      
      yield put({type:actionType.ADDTO_REVIEW_FAIL,error : e});
      yield put({type:actionType.INIT_ALERT,msg:label.ERROR});
    }
}


const checkReviewExist =(userId,token)=>
{
    const queryParams = '?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
    return axiosFireBase.get('/movieReview.json'+queryParams);
}


const getMoviewReview =(result,movieId)=>
{
    const data =  Object.keys(result).filter((val)=>{
          if(result[val]["movieId"] === movieId)
          {
            return result;
          }
        
        })
   
    return data.length>0?[result[data[0]]]:[];
}

export function* userMovieReview(action)
{
    try{
        const res = yield checkReviewExist(action.data.userId ,action.data.token);
        
        const review = getMoviewReview(res.data,action.data.movieId)
       
        if(review.length>0)
        {
          const obj ={
            movieId : action.data.movieId,
            name : review[0]['review']
          }
          yield put({type:actionType.ADDTO_REVIEW_SUCCESS,review : obj});
        }
    }catch(e)
    {   
        yield put({type:actionType.ADDTO_REVIEW_FAIL,error : e})
    }
    
}


