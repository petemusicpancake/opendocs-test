import { ADD_DOCUMENT_FAIL, ADD_DOCUMENT_SUCCESS, DELETED_ALL, UPLOAD_FAIL } from '../types'

const initialState = {
    error: null
}


export const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DOCUMENT_SUCCESS:
            console.log(action.payload)
            return state
        case ADD_DOCUMENT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case UPLOAD_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETED_ALL:
            console.log('All documents were succesfuly deleted')
            return state;
        default:
            return state
    }
}