import { employeesAPI } from '../api/api';

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    employeesList: [],
    profile: null
}

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES:
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

export const setEmployeesList = (employeesList) => ({ type: SET_EMPLOYEES, employeesList })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default employeesReducer;