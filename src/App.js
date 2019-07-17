import React,{Component} from 'react';
import MoviesList from './container/MoviesList';
import {Route,Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Spinner from './components/UI/spinner/Spinner';
import {connect} from 'react-redux';
import Movie from './components/Movie/Movie';
import NavBar from './components/NavBarMenu/NavBar/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import Logout from './container/Logout';
import * as actionType from './reduxStore/actions';
import MyLibrary from './components/MyLibrary/MyLibrary';
import MyFavorite from './components/MyLibrary/MyFavorite/MyFavorite';

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
        <Route path="/myLibrary" component={MyLibrary}/>
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
