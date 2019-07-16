import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionType from '../../reduxStore/actions';
import favImg from '../../assets/images/fav.png';
import watchListImg from '../../assets/images/watchlist.png';
import MovieDetails from './MovieDetails';
import AboutMovie from './AboutMovie';
import './MovieCard.css';

export class Movie extends Component {

  
  componentDidMount() {
    this.props.onFetchMovieById(this.props.match.params.id);
    
  }
  render() {
    let movieInfo =null
   if(this.props.movie && Object.keys(this.props.movie).length !== 0)
   {
    movieInfo = (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={'https://image.tmdb.org/t/p/original'+ this.props.movie.poster_path} style={{width:'100%'}} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">
            {this.props.movie.original_title}
            <img className="movie_icon-width ml-3" src={favImg} alt="Favorite" title="Add to Favorite"/>
            <img className="movie_icon-width ml-3" src={watchListImg} alt="WatchList" title="Add to Watchlist"/>
            </h2>
            <MovieDetails movie={this.props.movie}/>  
          </div>
        </div>
       
            <AboutMovie movie={this.props.movie}/>
      </div>
    );
   }
  

    let content =  movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
   movie: state.movies.movie
});

const mapDispatchToProps = (dispatch) =>
{
  return {
   onFetchMovieById : (val) => dispatch({type :actionType.FETCH_MOVIE_DATA,movieId : val})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
