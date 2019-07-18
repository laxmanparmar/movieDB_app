import React, { Component } from 'react';
import * as actionType from '../../reduxStore/actions';
import MyFavorite from './MyFavorite/MyFavorite';
import MyWatchList from './MyWatchList/MyWatchList';
import './MyLibrary.css';
import { connect } from 'react-redux';

class MyLibrary extends Component {

    state={
        tab1:true,
        tab2:false
    }

    updateTab1 =()=>
    {
        this.setState({tab1:true,tab2:false})
    }
    updateTab2 =()=>
    {
        this.setState({tab1:false,tab2:true})
    }
    componentDidMount() {

        const queryObj = {
            userId: localStorage.getItem("userId"),
            token: localStorage.getItem("token")
        }

        this.props.onGetMyFavorites(queryObj);
        this.props.onGetMyWatchList(queryObj);
    }

    removeFav = (storeId)=>
    {
        
        const queryObj = {
            storeId: storeId,
            token: localStorage.getItem("token")
        }
        this.props.onRemoveFav(queryObj);
    }

    removeWatch = (storeId)=>
    {
        const queryObj = {
            storeId: storeId,
            token: localStorage.getItem("token")
        }
        this.props.onRemoveWatch(queryObj);
    }
    render() {
                
        return (

            <div className="container">
                <input id="tab-1" type="radio" name="tabs" checked={this.state.tab1} onChange={this.updateTab1}/>
                <input id="tab-2" type="radio" name="tabs" checked={this.state.tab2} onChange={this.updateTab2}/>

                <div className="tabs">
                    <label htmlFor="tab-1">Favorites</label>
                    <label htmlFor="tab-2">WatchList</label>

                </div>
                <div className="content myLibrary_content-height">
                    
                    <MyFavorite  myFavList={this.props.myFavorites} removeFav={(val)=> this.removeFav(val)}/>
                    <MyWatchList myWatchList={this.props.myWatchList} removeWatch={(val)=> this.removeWatch(val)}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        // token : state.auth.token,
        //fav : state.myLibrary.myFavorite
        myFavorites: state.myLibrary.myFavorite,
        myWatchList : state.myLibrary.myWatchList
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetMyFavorites: (val) => dispatch({ type: actionType.FETCH_MYFAVORITE_START, data: val }),
        onGetMyWatchList: (val) => dispatch({ type: actionType.FETCH_WATCHLIST_START, data: val }),
        onRemoveFav: (val) => dispatch({ type: actionType.REMOVE_FAV_START, data: val }),
        onRemoveWatch : (val) => dispatch({ type: actionType.REMOVE_WATCH_START, data: val })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyLibrary);