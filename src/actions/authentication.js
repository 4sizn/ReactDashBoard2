
import{AUTH_LOGIN, AUTH_LOGIN_SUCCESS ,AUTH_LOGIN_FAILURE} from "./ActionTypes";
import axios from 'axios'; //HTTP client 통신
/*LOGIN*/
export function loginRequest(username, password) {
    //dispatch(loginRequest(username, password)) 를 호출하면 디스패치에 맞는 request값 출력
    return (dispatch) => {
        dispatch(login());
         // API REQUEST
         return axios.post('/api/account/signin', { username, password })
         .then((response) => {
             // SUCCEED
             dispatch(loginSuccess(username));
         }).catch((error) => {
             // FAILED
             dispatch(loginFailure());
         });

        
        
    }
}

export function login() {
    return {
        type: AUTH_LOGIN
    }
}

export function loginSuccess(username){
    return {
        type : AUTH_LOGIN_SUCCESS,
        username
    }
}

export function loginFailure(){
    return {
        type:AUTH_LOGIN_FAILURE
    }
}