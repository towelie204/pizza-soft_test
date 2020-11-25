import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchEmployeesTable, setProfile, toggleSortOrder } from '../../__data__/actionCreators';
import { getSortedEmployeesList } from '../../__data__/selectors/commonSelectors';
import { getSorting } from '../../__data__/selectors/filterSelectors';
import Employee from '../Employee/Employee';
import EmployeesTableHeader from '../EmployeesTableHeader/EmployeesTableHeader';

import styles from './EmployeesTable.module.css';

const createToggleSortOrder = (key, handler) => (event) => {
    handler(key);
}

const columnHeaders = (props) => [
    {
        title: 'Сотрудник',
        sortable: true,
        name: 'name',
        onClick: createToggleSortOrder('name', props.toggleSortOrder)
    },
    { title: 'Должность' },
    { title: 'Телефон' },
    {
        title: 'Дата рождения',
        sortable: true,
        name: 'birthday',
        onClick: createToggleSortOrder('birthday', props.toggleSortOrder)
    }
]

const EmployeesTableComponent = (props) => (
    <div className={styles.tableWrapper}>
        <table className={styles.employeesList}>
            <EmployeesTableHeader sorting={props.sorting}
                headers={columnHeaders(props)} />
            <tbody>
                {props.employeesList.map(person => <Employee key={person.id}
                    person={person}
                    setProfile={props.setProfile} />)}
            </tbody>
        </table>
    </div>
)

EmployeesTableComponent.propTypes = {
    employeesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    sorting: PropTypes.object,
    fetchEmployeesTable: PropTypes.func.isRequired,
    toggleSortOrder: PropTypes.func.isRequired,
    setProfile: PropTypes.func.isRequired
}

EmployeesTableComponent.defaultProps = {
    employeesList: [],
    sorting: null,
    fetchEmployeesTable() {},
    toggleSortOrder() {},
    setProfile() {}
}

const mapStateToProps = (state) => ({
    employeesList: getSortedEmployeesList(state),
    sorting: getSorting(state)
})

const mapDispatchToProps = { fetchEmployeesTable, toggleSortOrder, setProfile };

const EmployeesTable = connect(mapStateToProps, mapDispatchToProps)(EmployeesTableComponent);

export default EmployeesTable;