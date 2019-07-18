import React from 'react';
import Rating from '../../UI/StarRating/Rating';
import DetailsButton from './DetailsButton';
const MovieCard = (props) =>
{

    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={'https://image.tmdb.org/t/p/original'+props.movieObj.poster_path} alt="Movie Cover" />
          <label className="text-light">
            {props.movieObj.title}
          </label>
          <Rating score={props.movieObj.vote_average}/> 

          <DetailsButton movieId={props.movieObj.id} />
         
        </div>
      </div>
    );
 
}

export default MovieCard;
