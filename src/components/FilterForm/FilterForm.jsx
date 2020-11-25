import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setRoleFilter, setArchiveFilter } from '../../__data__/actionCreators';
import { getRoles } from '../../__data__/selectors/employeeSelectors';
import { getArchived } from '../../__data__/selectors/filterSelectors';

import styles from './FilterForm.module.css'

const FilterFormComponent = (props) => {
    const createHandleSelect = (handler) => (event) => {
        handler(event.target.value)
    }

    const createHandleIsArchive = (handler) => (event) => {
        handler(event.target.checked)
    }
    
    return (
        <div className={styles.filterForm}>
            <div className={styles.filtersWrapper}>
                <div className={styles.roles}>
                    <label htmlFor="role">Должность: </label>
                    <div className={styles.select}>
                        <select onChange={createHandleSelect(props.setRoleFilter)} name="role" id="role">
                            <option value="all">Все сотрудники</option>
                            {props.roles.map((role) => (
                                <option key={role.value} value={role.value}>{role.text}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.archive}>
                    <label htmlFor="isArchive">В архиве:</label>
                    <input name="isArchive"
                        id="isArchive"
                        type="checkbox"
                        checked={props.isArchive}
                        onChange={createHandleIsArchive(props.setArchiveFilter)} />
                </div>

                <div>
                    <NavLink to={`/add-employee`} className={styles.submitBtn}>
                        Добавить сотрудника
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

FilterFormComponent.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.object).isRequired,
    isArchive: PropTypes.bool,
    setRoleFilter: PropTypes.func.isRequired,
    setArchiveFilter: PropTypes.func.isRequired
}

FilterFormComponent.defaultProps = {
    roles: [],
    isArchive: false,
    setRoleFilter() {},
    setArchiveFilter() {}
}

const mapStateToProps = (state) => ({
    roles: getRoles(state),
    isArchive: getArchived(state)
})

const mapDispatchToProps = { setRoleFilter, setArchiveFilter };

export default connect(mapStateToProps, mapDispatchToProps)(FilterFormComponent);