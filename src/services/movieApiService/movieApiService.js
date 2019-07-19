import axiosIns from '../../common/axiosInstance';
import axiosFireBase from '../../common/axiosFireBaseInstance';

export const latestMovieApi = () => {

    return axiosIns.get(`/movie/popular`);

}

export const searchMovie = (action) => {
    return axiosIns.get(`/search/movie?query=${action.searchParam}`);
}

export const getMovieById = (action) => {
    return axiosIns.get(`/movie/${action.movieId}?append_to_response=credits`);
}

export const addMoviewReview = (params, token) => {
    const formParams = {
        movieId: params.movieId,
        userId: params.userId,
        review: params.review
    }
    return axiosFireBase.post('/movieReview.json?auth=' + token, formParams);
}

export const checkReviewExist = (userId, token) => {
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    return axiosFireBase.get('/movieReview.json' + queryParams);
}