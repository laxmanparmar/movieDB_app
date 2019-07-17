import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionType from '../../reduxStore/actions'
import MovieCard from '../Movie/Card/MovieCard';


class Home extends Component
{
    componentDidMount()
    {
        this.props.getMovies();
       
    }
    render()
    {
        return(
            <div className="row mt-10">
                {
                   this.props.popularMovies.map(ins =>{
                        return <MovieCard movieObj={ins} key={ins.id}/>
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        getMovies : () => dispatch({type:actionType.FETCH_LATEST_MOVIES})
    }
        
    
}
const mapStateToProps = (state) =>
{
    return{
        popularMovies : state.movies.movieList
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);