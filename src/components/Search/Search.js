import React, { Component } from 'react';
import * as actionType from '../../reduxStore/actions';
import {connect} from 'react-redux';

class Search extends Component {
 
  state ={
    searchText : ''
  }
  onSubmit = e => {
      e.preventDefault();
      this.props.onSearchMovie(this.state.searchText);
    
  };

  onChange = e => {
    this.setState({searchText:e.target.value});
  };
  render() {
    return (
      
      <form id="searchForm" onSubmit={this.onSubmit} className="mb-5">
          <div className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Search Movies ..."
                autoComplete="off"
                onChange ={this.onChange}
              />
            <span className="input-group-btn ml-2">
                      <button type="submit" className="btn btn-primary btn-bg">
                        Search
                      </button>
            </span>
          </div>
            
          </form>
     
     
    );
  }
}

const mapDispatchToProps = (dispatch) =>
{
  return {
    onSearchMovie : (val)=> dispatch({type:actionType.SEARCH_MOVIE,searchParam : val}),
  
  }
}

export default connect(null,mapDispatchToProps)(Search);
