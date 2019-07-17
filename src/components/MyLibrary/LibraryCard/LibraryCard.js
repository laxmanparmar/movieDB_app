import React from 'react';

const LibraryCard = (props) =>
{
   
    return (
       <div className="col-6 mt-3">
              <div className="card">
                  <div className="card-horizontal">
                      <div className="img-square-wrapper">
                          <img className="myLibrary_img-padding" src={'https://image.tmdb.org/t/p/w200'+props.movie.imagePath} alt="Card image cap"/>
                      </div>
                      <div className="card-body">
                          <h4 className="card-title">{props.movie.title}</h4>
                          <p className="card-text">{props.movie.tagline}</p>
                      </div>
                  </div>
                 
              </div>
          </div>
   
    )
}

export default LibraryCard;