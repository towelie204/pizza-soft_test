import axios from 'axios';

import { FETCH_EMPLOYEES, SET_PROFILE, TOGGLE_SORT_ORDER, SET_ROLE_FILTER } from "./constants/actionTypes"

export const fetchEmployeesTable = () => async (dispatch) => {
    
    try {
        const response = await axios.get('https://raw.githubusercontent.com/towelie204/test_API/master/employees.json')
        dispatch({ type: FETCH_EMPLOYEES, employeesList: response.data })
    } catch (err) {
        console.error(err)
    }

    return
}

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

// Filters

export const toggleSortOrder = (key) => ({ type: TOGGLE_SORT_ORDER, payload: key })

export const setRoleFilter = (role) => ({ type: SET_ROLE_FILTER, payload: role })