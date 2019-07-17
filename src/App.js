import React,{Component} from 'react';
import MoviesList from './container/MoviesList';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Spinner from './components/UI/spinner/Spinner';
import {connect} from 'react-redux';
import Movie from './components/MovieCard/Movie';
import NavBar from './components/NavBarMenu/NavBar/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import Logout from './container/Logout';
import * as actionType from './reduxStore/actions';

class App extends Component {

  componentDidMount()
  {
    this.props.autoLoginTry()
  }
  render()
  { 
    return (
      <div className="App">
       {this.props.onSpinner?<Spinner/>:null}
       
       <NavBar isAutheticate={this.props.isAutheticate}/>
      
      <Switch>
        <Route path="/auth" component={LoginForm}/>  
        <Route path="/logout" component={Logout}/>
        <Route path="/movie/:id" component={Movie}/>
        <Route path="/" exact component={MoviesList}/>
       </Switch>
        
      </div>
    );
  }
 
}

const mapStateToProps = (state) =>
{
    return {
        onSpinner : state.movies.spinner || state.auth.loading,
        isAutheticate : state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch =>
{
  return{
      autoLoginTry : () => dispatch({type:actionType.AUTH_AUTOLOGIN})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
