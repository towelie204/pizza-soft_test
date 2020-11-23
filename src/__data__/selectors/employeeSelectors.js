import { createSelector } from 'reselect';
import _ from 'lodash';

const getEmployees = (state) => state.employees;

export const getEmployeesList = createSelector(getEmployees, (employees) => employees.employeesList)
export const getProfile = createSelector(getEmployees, (employees) => employees.profile)

export const rolesMap = {
    all: 'Все сотрудники',
    driver: 'Водитель',
    waiter: 'Официант',
    cook: 'Повар'
}

export const getRoles = createSelector(getEmployeesList, (employees) => {
    return _.uniqBy(employees, 'role').map(employee => {
        return {text: rolesMap[employee.role] || employee.role, value: employee.role}
    })
})
