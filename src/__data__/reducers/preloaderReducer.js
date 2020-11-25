import { SHOW_PRELOADER, HIDE_PRELOADER } from '../constants/actionTypes';

let initialState = {}

const preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PRELOADER:
            return {visible: true}
        case HIDE_PRELOADER:
            return {visible: false}
        default:
            return state;
    }
}

export default preloaderReducer;