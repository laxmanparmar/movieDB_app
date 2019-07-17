import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../UI/StarRating/Rating';

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
          <Link className="btn btn-primary mt-2" to={'/movie/' + props.movieObj.id}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
 
}

export default MovieCard;
