import * as types from "../actions/ActionTypes";
import React from "react";

const initState = {
    post : {
        status : 'INIT',
        error : -1
    },
    list : {
        status : 'INIT',
        data : [],
        isLast : false
    }
};

export default function memo(state, action) {
    if(typeof state === "undefined") {
        state = initState;
    }

    switch(action.type) {
        case types.MEMO_POST:
            return {
                post: {
                    status: 'WAITING',
                    error: -1
                }
            }
        case types.MEMO_POST_SUCCESS:
            return{
                post: {
                    status: 'SUCCESS'
                }
            }
        case types.MEMO_POST_FAILURE:
            return {
                post: {
                    status: 'FAILURE',
                    error: action.error
                }
            }
        case types.MEMO_LIST:
            return {
                list: {
                    status : 'WAITING'
                }
            }
        case types.MEMO_LIST_SUCCESS:
            if(action.isInitial){
                return {
                    list : {
                        status : 'SUCCESS',
                        data : action.data,
                        isList : action.data.length <6
                    }
                }
            }
            return state;

        case types.MEMO_LIST_FAILURE:
            return {
                list : {
                    status : 'FAILURE'
                }
            }
        
        default:
            return state;
    }
}
