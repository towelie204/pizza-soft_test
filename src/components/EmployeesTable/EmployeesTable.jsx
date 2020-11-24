import React from 'react';
import { connect } from 'react-redux';

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

class EmployeesTableComponent extends React.Component {

    render() {
        return (
            <div className={styles.tableWrapper}>
                <table className={styles.employeesList}>
                    <EmployeesTableHeader sorting={this.props.sorting}
                        headers={columnHeaders(this.props)} />
                    <tbody>
                        {this.props.employeesList.map(person => <Employee key={person.id}
                            person={person}
                            setProfile={this.props.setProfile} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    employeesList: getSortedEmployeesList(state),
    sorting: getSorting(state)
})

const mapDispatchToProps = { fetchEmployeesTable, toggleSortOrder, setProfile };

const EmployeesTable = connect(mapStateToProps, mapDispatchToProps)(EmployeesTableComponent);

export default EmployeesTable;