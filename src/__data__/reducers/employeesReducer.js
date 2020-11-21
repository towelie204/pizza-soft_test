import { FETCH_EMPLOYEES, SET_PROFILE } from '../constants/actionTypes';

let initialState = {
    employeesList: [],
    profile: null
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                employeesList: action.employeesList
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: state.employeesList[action.profile - 1]
            }
        default:
            return state;
    }
}

export default employeesReducer;