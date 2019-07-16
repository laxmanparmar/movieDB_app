import axios from 'axios';
import {put} from 'redux-saga/effects';
import * as actionType from '../reduxStore/actions';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

const authApi = (userData,isSignIn)=>
{
    
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC57ScvILrEjPOxYjdkj_xCyaQeqn6qKiM';

    if(!isSignIn)
    {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC57ScvILrEjPOxYjdkj_xCyaQeqn6qKiM';
    }
        
    const formParams = {
        email : userData.email,
        password : userData.password,
        returnSecureToken : true
    }
   return axios.post(url,formParams)
}


export function* checkAuthTimeOut(data)
{
    
    yield delay(data.time*1000);
    
    yield  put({type:actionType.AUTH_LOGOUT});
}


export function* authLogin(userData)
{
    try{
        const result = yield authApi(userData.data,userData.isSignIn);
       
        yield put({type:actionType.AUTH_LOGOUT_START,time : result.data.expiresIn})
        yield put({type:actionType.AUTH_SUCCESS,data : result.data})
    }catch(e)
    {
        yield put({type:actionType.AUTH_FAIL,error : e.response.data.error})
    }
}