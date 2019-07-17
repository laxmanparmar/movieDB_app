import React, { Component } from 'react';
import * as actionType from '../../reduxStore/actions';
import MyFavorite from './MyFavorite/MyFavorite';
import MyWatchList from './MyWatchList/MyWatchList';
import './MyLibrary.css';
import { connect } from 'react-redux';

class MyLibrary extends Component {
    componentDidMount() {

        const queryObj = {
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token")
        }

        this.props.onGetMyFavorites(queryObj);

    }

    
    render() {
                
        return (

            <div className="container">
                <input id="tab-1" type="radio" name="tabs" checked="checked" />
                <input id="tab-2" type="radio" name="tabs" />

                <div className="tabs">
                    <label for="tab-1">WatchList</label>
                    <label for="tab-2">Favorites</label>

                </div>
                <div className="content myLibrary_content-height">
                    
                    <MyFavorite  myFavList={this.props.myFavorites} />
                    <MyWatchList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state.myLibrary)
    return {
        // token : state.auth.token,
        //fav : state.myLibrary.myFavorite
        myFavorites: state.myLibrary.myFavorite
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetMyFavorites: (val) => dispatch({ type: actionType.FETCH_MYFAVORITE_START, data: val })

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);