import axiosFireBase from '../common/axiosFireBaseInstance';

export const updateFavoriteList =(data,token)=>
{
    const formParams = {
        movieId: data.movieId,
        userId : data.userId,
        imagePath : data.imagePath,
        title : data.title,
        tagline : data.tagline,
        rating : data.rating
    }
    return axiosFireBase.post('/movieFavorites.json?auth='+token,formParams);
}

export const checkFavoriteExist =(userId,token)=>
{
    const queryParams = '?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
    return axiosFireBase.get('/movieFavorites.json'+queryParams);
}

export const removeFavorite =(token,favId)=>
{
    const queryParams = '?auth='+token;
    return axiosFireBase.delete(`/movieFavorites/${favId}.json`+queryParams);
}

export const removeWatchlist =(token,watchId)=>
{
    const queryParams = '?auth='+token;
    return axiosFireBase.delete(`/movieWatchlists/${watchId}.json`+queryParams);
}

export const checkMovieIdExist =(result,movieId)=>
{
    const data =  Object.keys(result).filter((val)=>{
        return result[val]["movieId"] == movieId
        })
    return data.length>0;
}

export const updateWatchlistList =(data,token)=>
{
    const formParams = {
        movieId: data.movieId,
        userId : data.userId,
        imagePath : data.imagePath,
        title : data.title,
        tagline : data.tagline,
        rating : data.rating
    }
    return axiosFireBase.post('/movieWatchlists.json?auth='+token,formParams);
}

export const checkWatchlistExist =(userId,token)=>
{
    const queryParams = '?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
    return axiosFireBase.get('/movieWatchlists.json'+queryParams);
}

export const processData=(Obj)=>
{
    const result = [];
    Object.keys(Obj).forEach((val,index)=>{
       
        result.push({
            ...Obj[val],
            storeId : val
        }); 
    })
   return result;
}