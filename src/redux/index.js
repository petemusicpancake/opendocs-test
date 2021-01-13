import { createStore, combineReducers, applyMiddleware } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rrfConfig } from '../firebase/config'
import firebase from 'firebase/app'
import { createFirestoreInstance } from 'redux-firestore'
import {usersReducer} from './reducers/usersReducer'
import {uiReducer} from './reducers/uiReducer'
import {documentsReducer} from './reducers/documentsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    ui: uiReducer,
    documents: documentsReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}


export default store;