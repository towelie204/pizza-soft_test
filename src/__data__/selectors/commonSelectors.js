import { createSelector } from 'reselect';
import _ from 'lodash';

import { getEmployeesList } from './employeeSelectors';
import { getFilters, getSorting } from './filterSelectors';

const parseDate = (dateString) => {
    let dateArr = dateString.birthday.split(".")
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0])
}

export const getFilteredEmployeesList = createSelector(
    [getEmployeesList, getFilters],
    (employeesList, filters) => {
        let resultList = employeesList;
        if (filters?.role && filters.role !== 'all') {
            resultList = resultList.filter((employee) => {
                return employee.role === filters.role
            })
        }
        if (filters?.isArchive === undefined) {
            return resultList
        } else if (filters?.isArchive) {
            return resultList.filter(employee => {
                return employee.isArchive === filters.isArchive
            })
        }

        return resultList;
    }
)

export const getSortedEmployeesList = createSelector(
    [getFilteredEmployeesList, getSorting],
    (employeesList, sorting) => {
        if (!sorting) return employeesList;

        let sortedList = employeesList;
        if (sorting.name === 'birthday') {
            sortedList.sort((a, b) => {
                let dateA = parseDate(a)
                let dateB = parseDate(b)
                if (dateA === dateB) {
                    return 0
                } else if (dateA > dateB) {
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            sortedList = _.sortBy(sortedList, sorting.name)
        }

        return sorting.order
            ? sortedList
            : _.reverse(sortedList)
    }
)

