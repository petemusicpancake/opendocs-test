import { EXTEND_MENU, OPEN_BURGER_MENU, CLOSE_LOGIN_MODAL } from '../types'


export const extendMenu = () => {
    return {
        type: EXTEND_MENU
    }
}

export const openBurgerMenu = () => {
    return {
        type: OPEN_BURGER_MENU
    }
}

export const closeLoginModal = () => {
    return {
        type: CLOSE_LOGIN_MODAL
    }
}