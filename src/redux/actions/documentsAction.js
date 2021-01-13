import { ADD_DOCUMENT_FAIL, ADD_DOCUMENT_SUCCESS, UPLOAD_FAIL, DELETED_ALL } from '../types'
import firebase from 'firebase/app'

export const addDocument = (file) => {
    return async (dispatch, getState) => {
        const storage = firebase.storage()
        const upload = storage.ref(`documents/${file.name}`).put(file)
        await upload.then((uploadTaskSnapshot) => {
            return uploadTaskSnapshot.ref.getDownloadURL()
                .then(url => {
                    const state = getState()
                    const uid = state.firebase.auth.uid;
                    const db = firebase.firestore()
                    db.collection('users').doc(uid).collection('documents').add({
                        url,
                        name: file.name,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        signed: false,
                        permission: 'Only you',
                        size: file.size
                    })
                    dispatch({
                        type: ADD_DOCUMENT_SUCCESS,
                        payload: `Document ${file.name} was succesfuly added`
                    })
                }).catch(err => {
                    dispatch({
                        type: UPLOAD_FAIL,
                        payload: err
                    })
                })
        },
            (err) => {
                dispatch({
                    type: ADD_DOCUMENT_FAIL,
                    payload: err
                })
            })
    }
}

export const deleteAll = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const uid = state.firebase.auth.uid;
        const db = firebase.firestore()
        await db.collection('users').doc(uid).collection('documents').get().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                doc.ref.delete()
                dispatch({ type: DELETED_ALL })
            })
        })
    }
}

