import employees from '../__data__/employees.json';

export const employeesAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(employees)
    }, 1000)
})
