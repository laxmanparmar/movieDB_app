import React from 'react';
import { Link } from 'react-router-dom';

const DetailsButton = (props) =>
{
    return(
        <Link className="btn btn-primary mt-2" to={'/movie/' + props.movieId}>
            Movie Details
        </Link>
    )
}

export default DetailsButton;