import React from 'react';
import { Link } from 'react-router-dom';

const AboutMovie = (props)=>
{
    return(
        <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {props.movie.overview}
            <hr />
        
            <Link to="/" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    )
}

export default AboutMovie;