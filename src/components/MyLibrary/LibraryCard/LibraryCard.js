import React from 'react';
import DetailsButton from '../../Movie/Card/DetailsButton';
import removeIcon from '../../../assets/images/removeIcon.png';
const LibraryCard = (props) =>
{
  
    return (
   
    <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={'https://image.tmdb.org/t/p/w200'+props.movie.imagePath} alt="Movie Cover" />
          <img className="libraryCard_rIcon-position" src={removeIcon} alt="remove" onClick={() => props.removeMe(props.movie.storeId)} title="remove" />
          
          <label className="text-light">
            {props.movie.title}
          </label>
          <DetailsButton movieId={props.movie.movieId} />
         
        </div>
      </div>
      
   
    )
}

export default LibraryCard;