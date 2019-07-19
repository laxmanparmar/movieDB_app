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
import MyLibrary from './components/MyLibrary/MyLibrary';
import { ToastContainer, toast } from "react-toastify";
import '../node_modules/react-toastify/dist/ReactToastify.css';
import * as authService from './services/authService/authService';

class App extends Component {

  componentDidMount() {
    const autoLoginAction = authService.autoLogin()
    this.props.autoLoginTry(autoLoginAction);

    const sessionAction = authService.updateAutoLogOutSession();
    if (Object.keys(sessionAction).length > 0) {
      this.props.onUpdateSession(sessionAction);
    }

  }

  initAlert = () => {
    toast.success(this.props.alertMsg);
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
        {this.props.isAlertCall ? this.initAlert() : null}
        <ToastContainer autoClose={2000} hideProgressBar={true} position={toast.POSITION.BOTTOM_CENTER} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    onSpinner: state.movies.spinner || state.auth.loading,
    isAutheticate: state.auth.token !== null,
    alertMsg: state.successError.msg,
    isAlertCall: state.successError.showAlert
  }
}

const mapDispatchToProps = dispatch => {
  return {
    autoLoginTry: (action) => dispatch(action),
    onUpdateSession: (action) => dispatch(action)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
