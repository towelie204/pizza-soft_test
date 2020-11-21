import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchEmployeesTable, toggleSortOrder } from '../../__data__/actionCreators';
import { getSortedEmployeesList } from '../../__data__/selectors/commonSelectors';
import { getEmployeesList } from '../../__data__/selectors/employeeSelectors';
import { getSorting } from '../../__data__/selectors/filterSelectors';
import Employee from '../Employee/Employee';
import EmployeesTableHeader from '../EmployeesTableHeader/EmployeesTableHeader';

import styles from './EmployeesTable.module.css';

const createToggleSortOrder = (key, handler) => (event) => {
    handler(key);
}

const EmployeesTableComponent = (props) => {

    useEffect(() => {
        props.fetchEmployeesTable();
    }, [props.employeesList.length]);

    const columnHeaders = [
        { title: 'Сотрудник', sortable: true, onClick: createToggleSortOrder('name', props.toggleSortOrder) },
        { title: 'Должность' },
        { title: 'Телефон' },
        { title: 'Дата рождения', sortable: true, onClick: createToggleSortOrder('birthday', props.toggleSortOrder) }
    ]

    console.log(props.sorting)
    
    return (
        <table className={styles.employeesList}>
            <EmployeesTableHeader sorting={props.sorting} headers={ columnHeaders } />
            <tbody>
                { props.employeesList.map(person => <Employee key={person.id} person={person} />)}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({ 
    employeesList: getSortedEmployeesList(state),
    sorting: getSorting(state)
})

const mapDispatchToProps =  { fetchEmployeesTable, toggleSortOrder };

const EmployeesTable = connect(mapStateToProps, mapDispatchToProps)(EmployeesTableComponent);

export default EmployeesTable;