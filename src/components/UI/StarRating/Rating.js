import React from 'react';
import './Rating.css';
const Rating = (props) =>
{
    
    let rate = props.score*10+"%";
    return (
        <div className="star-ratings-sprite ">
          <span style={{width:rate}} className="star-ratings-sprite-rating"></span>
        </div>
    )
}

export default Rating;