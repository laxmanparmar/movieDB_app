import axios from 'axios';
import * as actionType from '../../reduxStore/actions';

export const authApi = (userData, isSignIn) => {

    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC57ScvILrEjPOxYjdkj_xCyaQeqn6qKiM';

    if (!isSignIn) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC57ScvILrEjPOxYjdkj_xCyaQeqn6qKiM';
    }

    const formParams = {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
    }
    return axios.post(url, formParams)
}

export const setToLocal = (data) => {
    const expirationDate = new Date().getTime() + data.expiresIn * 1000;
    localStorage.setItem("token", data.idToken);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("userId", data.localId);
}

export const autoLogin = () => {

    const token = localStorage.getItem("token");
    if (!token) {
        return { type: actionType.AUTH_LOGOUT };
    } else {
        const expirationDate = new Date(parseInt(localStorage.getItem("expirationDate")));
        const userId = localStorage.getItem("userId");

        if (expirationDate <= new Date()) {
            actionType.removeUserOnLogout();
            return { type: actionType.AUTH_LOGOUT };
        } else {
            const userData = {
                idToken: token,
                localId: userId,
            }
            return { type: actionType.AUTH_SUCCESS, data: userData };
        }
    }
}

export const updateAutoLogOutSession = () => {
    const token = localStorage.getItem("token");
    const actionObj = {};
    if (token) {
        const expirationDate = new Date(parseInt(localStorage.getItem("expirationDate")));

        actionObj['type'] = actionType.AUTH_LOGOUT_START;
        actionObj['time'] = ((expirationDate.getTime() - new Date().getTime()) / 1000);
    }
   
    return actionObj;

}
