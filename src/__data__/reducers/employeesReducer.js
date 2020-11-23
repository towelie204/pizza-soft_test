import { FETCH_EMPLOYEES, SET_PROFILE, SAVE_PROFILE } from '../constants/actionTypes';

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
                profile: state.employeesList.find(item => item.id === Number(action.payload))
            }
        case SAVE_PROFILE:
            const newArr = state.employeesList.map((employee) => {
                if (employee.id === Number(action.payload.id)) {
                    return action.payload
                }
                return employee
            })
            return {
                ...state,
                employeesList: newArr
            }
        default:
            return state;
    }
}

export default employeesReducer;

