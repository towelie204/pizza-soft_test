import { employeesAPI } from '../api/api';

import {
    FETCH_EMPLOYEES,
    SET_PROFILE,
    TOGGLE_SORT_ORDER,
    SET_ROLE_FILTER,
    SET_ARCHIVE_FILTER,
    SAVE_PROFILE,
    ADD_EMPLOYEE
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

const replaseBirthdayDate = (profile) => {
    const birthday = profile.birthday.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');
    return ({...profile, birthday: birthday})
}

// const replaseBirthdaytoValidDate = (profile) => {
//     const birthday = profile.birthday.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3/$2/$1');
//     console.log(birthday)
//     return ({...profile, birthday: birthday})
// }

export const setProfile = (profile) => ({type: SET_PROFILE, payload: profile})

export const saveProfile = (profile) => ({type: SAVE_PROFILE, payload: replaseBirthdayDate(profile)})

export const addEmployee = (profile) => ({type: ADD_EMPLOYEE, payload: replaseBirthdayDate(profile)})
// Filters

export const toggleSortOrder = (key) => ({type: TOGGLE_SORT_ORDER, payload: key})

export const setRoleFilter = (role) => ({type: SET_ROLE_FILTER, payload: role})

export const setArchiveFilter = (isArchive) => ({type: SET_ARCHIVE_FILTER, payload: isArchive})