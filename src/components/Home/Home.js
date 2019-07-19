import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../reduxStore/actions'
import MovieCard from '../Movie/Card/MovieCard';
import noMatchFound from '../../assets/images/noMatchFound.png';

class Home extends Component {
    componentDidMount() {
        this.props.getMovies();

    }
    render() {
        let list = <img className="offset-md-3" src={noMatchFound} alt="no record match" />
        if (this.props.popularMovies.length > 0) {
            list = this.props.popularMovies.map(ins => {
                return <MovieCard movieObj={ins} key={ins.id} />
            })
        }
        return (
            <div className="row mt-10">
                {
                    list
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch({ type: actionType.FETCH_LATEST_MOVIES })
    }


}
const mapStateToProps = (state) => {
    return {
        popularMovies: state.movies.movieList
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);