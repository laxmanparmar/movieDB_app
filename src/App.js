import React, { Component } from 'react';
import MoviesList from './container/MoviesList';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Spinner from './components/UI/spinner/Spinner';
import { connect } from 'react-redux';
import Movie from './components/Movie/Movie';
import NavBar from './components/NavBarMenu/NavBar/NavBar';
import LoginForm from './components/LoginForm/LoginForm';
import Logout from './container/Logout';
import * as actionType from './reduxStore/actions';
import MyLibrary from './components/MyLibrary/MyLibrary';


class App extends Component {

  componentDidMount() {
    this.props.autoLoginTry()
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={LoginForm} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/" exact component={MoviesList} />
        <Redirect to="/" />
      </Switch>
    )
    if (this.props.isAutheticate) {
      routes = (
        <Switch>

          <Route path="/logout" component={Logout} />
          <Route path="/myLibrary" component={MyLibrary} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" exact component={MoviesList} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div className="App">
        {this.props.onSpinner ? <Spinner /> : null}

        <NavBar isAutheticate={this.props.isAutheticate} />

        {routes}

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    onSpinner: state.movies.spinner || state.auth.loading,
    isAutheticate: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLoginTry: () => dispatch({ type: actionType.AUTH_AUTOLOGIN })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
