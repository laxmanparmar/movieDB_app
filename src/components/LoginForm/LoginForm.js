import React, { Component } from "react";
import { Form } from "react-final-form";
import FieldInput from '../UI/Input/FieldInput';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import * as actionType from '../../reduxStore/actions';
import Alert from '../UI/Alert';
import { Redirect } from 'react-router-dom';
class LoginForm extends Component {
  state = {
    isSignIn: false
  }

  onSubmit = values => {
    this.props.onAuth(values, this.state.isSignIn)
  };

  validate = (values) => {

    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password && values.password.length < 6) {
      errors.password = "Length should be 6";
    }
    if (this.state.isSignIn) {
      if (!values.confirm) {
        errors.confirm = "Required";
      } else if (values.confirm !== values.password) {
        errors.confirm = "Must match";
      }
    }

    return errors;

  }

  switchSumit = () => {
    this.setState({ isSignIn: !this.state.isSignIn });
  }
  render() {
    let errorMessgae = null;
    if (this.props.errMsg) {
      errorMessgae = <Alert msg={this.props.errMsg.message} />;

    }
    let loginSuccessRedirect = null;
    if (this.props.isAutheticate) {
      loginSuccessRedirect = <Redirect to="/" />
    }

    return (
      <Aux>
        <Form
          onSubmit={values => this.onSubmit(values)}
          validate={values => this.validate(values)}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className="container mt-5">
              {loginSuccessRedirect}
              {errorMessgae}
              <FieldInput name="email" type="text" placeholder="Email" label="Email" />

              <FieldInput name="password" type="password" placeholder="Password" label="Password" />
              {
                this.state.isSignIn ?
                  <FieldInput name="confirm" type="password" placeholder="Confirm" label="Confirm" />
                  : null
              }

              <div className="text-center">
                <button type="submit" disabled={submitting} className="btn btn-success">
                  Submit
                </button>

              </div>

            </form>

          )}
        />

        <div className="text-center">
          <button type="button " className="btn btn-info mt-2" onClick={this.switchSumit}>
            Switch to {this.state.isSignIn ? 'SignIn' : 'Register'}
          </button>
        </div>
      </Aux>
    )
  }

}
const mapStateToProp = state => {
  return {
    errMsg: state.auth.error,
    isAutheticate: state.auth.token !== null
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    onAuth: (values, isSignIn) => dispatch({ type: actionType.AUTH_START, data: values, isSignIn: isSignIn })
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(LoginForm);