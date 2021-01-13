import { CLOSE_LOGIN_MODAL, EXTEND_MENU, OPEN_BURGER_MENU } from '../types'

const initialState = {
    menuOpen: false,
    burgerOpen: false,
    closeLogin: false,
}
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXTEND_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        case OPEN_BURGER_MENU:
            return {
                ...state,
                burgerOpen: !state.burgerOpen
            }
        case CLOSE_LOGIN_MODAL:
            return {
                ...state,
                closeLogin: true
            }
        default:
            return state
    }
}