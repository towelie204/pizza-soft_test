import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchEmployeesTable, toggleSortOrder } from '../../__data__/actionCreators';
import { getEmployeesList } from '../../__data__/selectors/employeeSelectors';
import { getSortings } from '../../__data__/selectors/filterSelectors';
import Employee from '../Employee/Employee';
import EmployeesTableHeader from '../EmployeesTableHeader/EmployeesTableHeader';

import styles from './EmployeesTable.module.css';

const EmployeesTableComponent = (props) => {

    useEffect(() => {
        props.fetchEmployeesTable();
    });

    const createToggleSortOrder = (key) => (event) => {
        props.toggleSortOrder(key)
    }

    const columnHeaders = [
        { title: 'Сотрудник', sortable: true, onClick: createToggleSortOrder('name') },
        { title: 'Должность' },
        { title: 'Телефон' },
        { title: 'Дата рождения', sortable: true, onClick: createToggleSortOrder('birthday') }
    ]
    console.log(props.sortings)
    return (
        <table className={styles.employeesList}>
            <EmployeesTableHeader headers={ columnHeaders } />
            <tbody>
                { props.employeesList.map(person => <Employee key={person.id} person={person} />)}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({ 
    employeesList: getEmployeesList(state),
    sortings: getSortings(state)
})

const mapDispatchToProps =  { fetchEmployeesTable, toggleSortOrder };

const EmployeesTable = connect(mapStateToProps, mapDispatchToProps)(EmployeesTableComponent);

export default EmployeesTable;