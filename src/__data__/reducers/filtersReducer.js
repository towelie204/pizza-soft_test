import { TOGGLE_SORT_ORDER } from '../constants/actionTypes';

let initialState = {
    sortings: [],
    filters: null
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SORT_ORDER:
            return {
                ...state,
                sortings: state.sortings.includes(action.payload)
                    ? state.sortings.filter((sorting) => sorting === action.payload)
                    : [...state.sortings, action.payload]
            }
        default:
            return state;
    }
}

export default filtersReducer;