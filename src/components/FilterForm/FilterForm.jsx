import React from 'react';
import { connect } from 'react-redux';
import { setRoleFilter, setArchiveFilter } from '../../__data__/actionCreators';

import { getRoles } from '../../__data__/selectors/employeeSelectors';
import { getArchived } from '../../__data__/selectors/filterSelectors';

import styles from './FilterForm.module.css'

const FilterFormComponent = (props) => {
    const createHandleSelect = (handler) => (event) => {
        handler(event.target.value)
    }

    const createHandleIsArchive = (handler) => (event) => {
        console.log(event.target.checked)
        handler(event.target.checked)
    }

    return (
        <div className={styles.filterForm}>
            <div>
                <label htmlFor="role">Должность: </label>
                <select onChange={createHandleSelect(props.setRoleFilter)} name="role" id="role">
                    <option value="all">Все сотрудники</option>
                    {props.roles.map((role) => (
                        <option key={role.value} value={role.value}>{role.text}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="isArchive">В архиве:</label>
                <input name="isArchive"
                    id="isArchive"
                    type="checkbox"
                    checked={props.isArchive}
                    onChange={createHandleIsArchive(props.setArchiveFilter)} />
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({ 
    roles: getRoles(state),
    isArchive: getArchived(state)
})

const mapDispatchToProps =  { setRoleFilter, setArchiveFilter };

export default connect(mapStateToProps, mapDispatchToProps)(FilterFormComponent);