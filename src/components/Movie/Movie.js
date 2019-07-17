import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../reduxStore/actions';
import MovieHeader from './Details/MovieHeader';
import MovieDetails from './Details/MovieDetails';
import AboutMovie from './MovieControls/AboutMovie';
import './MovieCard.css';

class Movie extends Component {

  
  addToFavorite=()=>{
   
    if(this.props.isAutheticate)
    {
      const params= {
        movieId: this.props.match.params.id,
        userId:this.props.userId,
        token:this.props.token,
        imagePath :this.props.movie.poster_path,
        title : this.props.movie.original_title,
        tagline : this.props.movie.tagline,
        rating : this.props.movie.vote_average
      }
      this.props.onAddToFavorite(params)
    }
  }

  addToWatchlist=()=>{
    if(this.props.isAutheticate)
    {
      const params= {
        movieId: this.props.match.params.id,
        userId:this.props.userId,
        token:this.props.token,
        imagePath :this.props.movie.poster_path,
        title : this.props.movie.original_title,
        tagline : this.props.movie.tagline,
        rating : this.props.movie.vote_average
      }
      this.props.onAddToWatchlist(params)
    }
  }

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
            <MovieHeader movie={this.props.movie} 
            isAutheticate={this.props.isAutheticate} 
            addToFavorite={this.addToFavorite}
            addToWatchlist={this.addToWatchlist}
            />
            <MovieDetails movie={this.props.movie} isAutheticate={this.props.isAutheticate} 
            movieId={this.props.match.params.id}/>  
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
   movie: state.movies.movie,
   token: state.auth.token,
   userId : state.auth.userId,
   isAutheticate : state.auth.token !== null
});

const mapDispatchToProps = (dispatch) =>
{
  return {
   onFetchMovieById : (val) => dispatch({type :actionType.FETCH_MOVIE_DATA,movieId : val}),
   onAddToFavorite : (params) => dispatch({type:actionType.ADDTO_FAVORITE_START,
                                           params : params}),
   onAddToWatchlist : (params) => dispatch({type:actionType.ADDTO_WATCHLIST_START,
                                            params : params})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
