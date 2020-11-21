import React from 'react';
import { connect } from 'react-redux';
import { setRoleFilter } from '../../__data__/actionCreators';

import { getRoles } from '../../__data__/selectors/employeeSelectors';

import styles from './FilterForm.module.css'

const FilterFormComponent = (props) => {
    const createHandleSelect = (handler) => (event) => {
        handler(event.target.value)
    } 

    return (
        <div className={styles.filterForm}>
            <select onChange={createHandleSelect(props.setRoleFilter)} name="role" id="role">
                {props.roles.map((role) => (
                    <option key={role.value} value={role.value}>{role.text}</option>
                ))}
            </select>
        </div>
    )
}

const mapStateToProps = (state) => ({ 
    roles: getRoles(state)
})

const mapDispatchToProps =  { setRoleFilter };

export default connect(mapStateToProps, mapDispatchToProps)(FilterFormComponent);