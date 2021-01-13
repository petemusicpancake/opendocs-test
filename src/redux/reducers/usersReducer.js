import { LOGGED_OUT, LOGGED_OUT_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

const initialState = {
    error: null
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state;
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case LOGGED_OUT:
            console.log('Succesfuly logged');
            return state
        case LOGGED_OUT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case REGISTER_SUCCESS:
            console.log(action.payload)
            return state
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;

    }
}