import * as types from '../actions/ActionTypes'

//Store에 저장될 초기 데이터
const initState = {
    login : {
        status : 'INIT'
    },
    register : {
        status : 'INIT',
        error : -1
    }
    ,
    status : {
        isLoggedIn : false,
        currentUser : '',
    }
}

export default function authentication(state, action) {
    if(typeof state === "undefined")
        state = initState;
    /* To be implemented.. */
    switch(action.type){
        /*LOGIN*/
        case types.AUTH_LOGIN:
            return {
                login : {
                    status : "WAITING"
                }
            }
        case types.AUTH_LOGIN_SUCCESS:
        console.log("Auth_login_success");
            return {
                login : {
                    status : "SUCCESS"
                },
                status : {
                    isLoggedIn : true,
                    currentUser : action.username
                }
            }
        case types.AUTH_LOGIN_FAILURE:
        return {
            login : {
                status : "FAILURE"
            }
        }
        case types.AUTH_REGISTER:
        return{
            register:{
                status : "WAITING"
            }
        }
        case types.AUTH_REGISTER_SUCCESS:
            return{
                register:{
                    status : "SUCCESS"
                }
            }
        case types.AUTH_REGISTER_FAILURE:
            return{
                register:{
                    status : "FAILURE",
                    error : action.error
                }
            }
        default:
        return state;   

    }
}   