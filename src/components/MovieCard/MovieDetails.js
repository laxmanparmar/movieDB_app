import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import AddReview from './AddReview';

const MovieDetails = (props)=>
{
    return (
      <Aux>
        <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {props.movie.genres.map(val => val.name + " ")}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {props.movie.release_date}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {props.movie.vote_average}/10
              </li>
              <li className="list-group-item">
                <strong>Writers:</strong> {props.movie.credits.crew.map(val => val.name + "(" + val.job +"), ")}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {props.movie.credits.cast.map(val => {
                
                  return val.name + "("+val.character+"), "})}
              </li>
             
             </ul>
             {
               props.isAutheticate ? 
               <AddReview movieId={props.movieId}/>:
                <div className="jumbotron mt-4" style={{padding: '1rem 1rem'}}><strong>Login to give Review</strong></div>
             }
              
             </Aux>      
    )
}
export default MovieDetails;