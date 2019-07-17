import React from 'react';
import favImg from '../../../assets/images/fav.png';
import watchListImg from '../../../assets/images/watchlist.png';
import backArrowImg from '../../../assets/images/backArrow.png';
import { Link } from 'react-router-dom';

const MovieHeader =(props)=>
{
    return(
        <h2 className="mb-4">

            {props.movie.original_title}
            
            <img className="movie_icon-width ml-3" src={favImg} alt="Favorite"
            onClick={props.addToFavorite}
            title={props.isAutheticate?'Add to Favorite':'Login to Add this to your Favorite'}/>
            
            <img className="movie_icon-width ml-3" src={watchListImg} alt="WatchList" 
            onClick={props.addToWatchlist}
            title={props.isAutheticate?'Add to Watchlist':'Login to Add this to your Watchlist'}
            />

            <Link to="/" className="movie_icon-rightAlign">
            <img className="movie_icon-width ml-3" src={backArrowImg} alt="Favorite" title="Go Back To Search"/>
            </Link>

            </h2>
    )
}

export default MovieHeader;