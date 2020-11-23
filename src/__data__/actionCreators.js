import { employeesAPI } from '../api/api';

import {
    FETCH_EMPLOYEES,
    SET_PROFILE,
    TOGGLE_SORT_ORDER,
    SET_ROLE_FILTER,
    SET_ARCHIVE_FILTER,
    SAVE_PROFILE
} from "./constants/actionTypes"

export const fetchEmployeesTable = () => async (dispatch) => {
    try {
        const response = await employeesAPI;
        dispatch({ type: FETCH_EMPLOYEES, employeesList: response })
    } catch (err) {
        console.error(err)
    }

    return
}

export const setProfile = (profile) => ({ type: SET_PROFILE, payload: profile })

export const saveProfile = (profile) => ({ type:SAVE_PROFILE, payload: profile })

// Filters

export const toggleSortOrder = (key) => ({ type: TOGGLE_SORT_ORDER, payload: key })

export const setRoleFilter = (role) => ({ type: SET_ROLE_FILTER, payload: role })

export const setArchiveFilter = (isArchive) => ({ type: SET_ARCHIVE_FILTER, payload: isArchive })