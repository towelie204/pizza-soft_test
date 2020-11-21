import { TOGGLE_SORT_ORDER, SET_ROLE_FILTER } from '../constants/actionTypes';
import _ from 'lodash';

let initialState = {
    sorting: null,
    filters: null
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SORT_ORDER:
            const sorting = {
                name: action.payload, 
                order: state?.sorting?.name === action.payload
                    ? !state.sorting.order
                    : true
            }
            return {...state, sorting}
        case SET_ROLE_FILTER:
            return {...state, filters: {...state.filters, role: action.payload}}
        default:
            return state;
    }
}

export default filtersReducer;