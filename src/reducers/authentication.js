import * as types from '../actions/ActionTypes'

//Store에 저장될 초기 데이터
const initState = {
    login : {
        status : 'INIT'
    },
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
        default:
        return state;   

    }
}   