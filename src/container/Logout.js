import React,{Component} from 'react';
import * as actionType from'../reduxStore/actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Logout extends Component
{
    componentDidMount()
    {
        this.props.onLogout();
        actionType.removeUserOnLogout();
    }
    render(){
        return(
            <Redirect to="/"/>
        )
    }
}

const mapDisptachToProp = dispatch =>
{
    return{
        onLogout : ()=> dispatch({type:actionType.AUTH_LOGOUT})
    }
}
export default connect(null,mapDisptachToProp)(Logout);