import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILURE
} from "./ActionTypes";

import axios from "axios"; //HTTP client 통신
/*LOGIN*/
export function loginRequest(username, password) {
  //dispatch(loginRequest(username, password)) 를 호출하면 디스패치에 맞는 request값 출력
  return dispatch => {
    dispatch(login());
    // API REQUEST
    return axios
      .post("/api/account/signin", { username, password })
      .then(response => {
        // SUCCEED
        dispatch(loginSuccess(username));
      })
      .catch(error => {
        // FAILED
        dispatch(loginFailure());
      });
  };
}

export function login() {
  return {
    type: AUTH_LOGIN
  };
}

export function loginSuccess(username) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    username
  };
}

export function loginFailure() {
  return {
    type: AUTH_LOGIN_FAILURE
  };
}

export function logoutRequest(){
  return (dispatch) =>{
    return axios.post('/api/account/logout')
    .then((res)=>{
      dispatch(logout());
    });
  };
}

export function logout(){
  return {
    type : AUTH_LOGOUT
  };
}


export function registerRequest(username, password) {
    console.log(username, password);
    return (dispatch) => {
        dispatch(register());

        return axios.post('/api/account/signup', { username, password })
        .then((response) => {
            dispatch(registerSuccess());
        }).catch((error) => {
            dispatch(registerFailure(error.response.data.code));
        });
    };
}

export function register(){
    return {
        type : AUTH_REGISTER
    };
}

export function registerSuccess(){
    return {
        type : AUTH_REGISTER_SUCCESS
    };
}

export function registerFailure(error){
    return {
        type : AUTH_REGISTER_FAILURE,
        error
    };
}