import React,{Component} from 'react';
import * as actionType from '../../../reduxStore/actions';
import {connect} from 'react-redux';
import Alert from '../../UI/Alert';

class AddReview extends Component
{
    state = {
        review : '',
        error : null
    }

    inputReview = (e) =>
    {
       this.setState({review : e.target.value,error : null});
      
    }

    componentDidMount()
    {
        const paramObj = {
            userId : this.props.userId,
            token:this.props.token,
            movieId : this.props.movieId
        }
        this.props.onFetchUserReview(paramObj)
    }

    static getDerivedStateFromProps(props,state)
    {
       if(props.review && props.reviewMovieId && props.reviewMovieId === props.movieId)
        {
          return  {
            review : props.review,
            error : null
            }
        }
        return state;
    }
    submitReview = () =>
    {
        const paramObj = {
            userId : this.props.userId,
            token:this.props.token,
            review : this.state.review,
            movieId : this.props.movieId
        }
        
        if(this.state.review && this.state.review!== '')
        {
           this.props.onSubmitReview(paramObj)
        }else{
            this.setState({error : <Alert msg="Required"/>})
        }
        
    }
    render()
    {
        return(
            <div className="form-group mt-2">
                  <label htmlFor="comment">Your Review:</label>
                  <textarea className="form-control" rows="5" id="comment" 
                  onChange={(e)=>this.inputReview(e)} value={this.state.review} disabled={this.props.reviewMovieId === this.props.movieId}></textarea>
                  {this.state.error}
                  {
                      !(this.props.reviewMovieId &&this.props.reviewMovieId === this.props.movieId)?
                      <button type="button" className="btn btn-primary mt-2"
                      onClick={this.submitReview}
                      >Submit</button>
                      : null 
                  }
                  
            </div>
            )
    }
    
}
const mapStateToProps = state =>{
    return {
        review : state.movieReview.review,
        token: state.auth.token,
        userId : state.auth.userId,
        reviewMovieId : state.movieReview.movieId
    }
}
const mapDispatchToProps = dispatch =>
{
    return{
        onFetchUserReview : (val)=>dispatch({type:actionType.FETCH_USER_REVIEW,data:val}),
        onSubmitReview : (val)=>dispatch({type:actionType.ADDTO_REVIEW_START,data:val})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddReview);