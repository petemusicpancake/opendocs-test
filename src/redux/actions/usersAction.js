import { LOGIN_SUCCESS, LOGIN_FAIL, LOGGED_OUT, LOGGED_OUT_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from '../types'
import firebase from 'firebase/app'

export const login = (email, password) => {
    return async (dispatch) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: LOGIN_SUCCESS })
            }).catch(err => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err
                })
            })

    }
}

export const logout = () => {
    return async (dispatch, getState) => {
        await firebase.auth().signOut()
            .then(() => {
                dispatch({ type: LOGGED_OUT })
            }).catch(err => {
                dispatch({
                    type: LOGGED_OUT_FAIL,
                    payload: err
                })
            })
    }
}

export const register = (email, password, username) => {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((data) => {
                firebase.firestore().collection('users').doc(data.user.uid).set({
                    username,
                    timestamp: new Date().toUTCString()
                })
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: `${username} was succesfuly registered`
                })
            }).catch(err => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: err
                })
            })
    }
}

