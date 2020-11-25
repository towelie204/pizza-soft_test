import { SHOW_ALERT, HIDE_ALERT } from '../constants/actionTypes';

let initialState = {}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {visible: true}
        case HIDE_ALERT:
            return {visible: false}
        default:
            return state;
    }
}

export default alertReducer;