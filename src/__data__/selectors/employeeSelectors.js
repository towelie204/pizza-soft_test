import { createSelector } from 'reselect';

const getEmployees = (state) => state.employees

export const getEmployeesList = createSelector(getEmployees, (employees) => employees.employeesList)