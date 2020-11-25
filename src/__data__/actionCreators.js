import { employeesAPI } from '../api/api';

import {
    FETCH_EMPLOYEES,
    SET_PROFILE,
    TOGGLE_SORT_ORDER,
    SET_ROLE_FILTER,
    SET_ARCHIVE_FILTER,
    SAVE_PROFILE,
    ADD_EMPLOYEE,
    SHOW_ALERT,
    HIDE_ALERT,
    SHOW_PRELOADER,
    HIDE_PRELOADER
} from "./constants/actionTypes"

export const fetchEmployeesTable = () => async (dispatch) => {
    dispatch({type: SHOW_PRELOADER})
    console.log(`${new Date()}: loading...`)
    try {
        const response = await employeesAPI;
        console.log(`${new Date()}: employees list loaded`);
        dispatch({ type: FETCH_EMPLOYEES, employeesList: response });
    } catch (err) {
        console.error(err);
    } finally {
        dispatch({type: HIDE_PRELOADER})
    }

    return
}

const replaseBirthdayDate = (profile) => {
    const birthday = profile.birthday.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');
    return ({...profile, birthday: birthday})
}

export const setProfile = (profile) => {
    console.log(`${new Date()}: link to edit page clicked`);
    return {type: SET_PROFILE, payload: profile}
}

export const saveProfile = (profile) => {
    console.log(`${new Date()}: employee ${profile.name} data changed`);
    return {type: SAVE_PROFILE, payload: replaseBirthdayDate(profile)}
}

export const addEmployee = (profile) => {
    console.log(`${new Date()}: ${profile.name} added to the table`);
    return {type: ADD_EMPLOYEE, payload: replaseBirthdayDate(profile)}
}

// Filters
export const toggleSortOrder = (key) => {
    console.log(`${new Date()}: sort order changed`);
    return {type: TOGGLE_SORT_ORDER, payload: key}
}

export const setRoleFilter = (role) => {
    console.log(`${new Date()}: role filter button clicked`);
    return {type: SET_ROLE_FILTER, payload: role}
}

export const setArchiveFilter = (isArchive) => {
    console.log(`${new Date()}: isArchive filter clicked`);
    return {type: SET_ARCHIVE_FILTER, payload: isArchive}
}

//alerts
export const showAlert = (hideAlert) => (dispatch) => {
    console.log(`${new Date()}: alert will disappear after 2 second...`);
    setTimeout(() => {
        console.log(`${new Date()}: alert disappeared`);
        dispatch({type: HIDE_ALERT})
    }, 2000)
    dispatch ({type: SHOW_ALERT})
}