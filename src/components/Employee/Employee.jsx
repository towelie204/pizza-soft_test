import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Employee.module.css';

const Employee = (props) => {
    const createClickHandler = (id) => (event) => {
        props.setProfile(id)
    }

    return (
        <tr className={!props.person.isArchive
            ? styles.employeeCard
            : `${styles.employeeCard} ${styles.isArchive}`}>
            <td width='33%' className={styles.personInfo}>
                <NavLink onClick={createClickHandler(props.person.id)}
                    to={`/profile/${props.person.id}`}
                    className={styles.personLink}>
                    <span className={styles.personName}>{props.person.name}</span>
                </NavLink>
            </td>
            <td width='15%'>
                <NavLink onClick={createClickHandler(props.person.id)}
                    to={`/profile/${props.person.id}`}
                    className={styles.personLink}>
                    <span>
                        {
                            (props.person.role === 'driver') && 'водитель' ||
                            (props.person.role === 'waiter') && 'официант' ||
                            (props.person.role === 'cook') && 'повар'
                        }
                    </span>
                </NavLink>
            </td>
            <td width='26%'>
                <NavLink onClick={createClickHandler(props.person.id)}
                    to={`/profile/${props.person.id}`}
                    className={styles.personLink}>
                    <span className={styles.phoneCell}>{props.person.phone}</span>
                </NavLink>
            </td>
            <td width='26%'>
                <NavLink onClick={createClickHandler(props.person.id)}
                    to={`/profile/${props.person.id}`}
                    className={styles.personLink}>
                    <span className={styles.birthdayCell}>{props.person.birthday}</span>
                </NavLink>
            </td>
        </tr >
    )
}

Employee.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isArchive: PropTypes.bool.isRequired,
        role: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired
    }).isRequired,
    setProfile: PropTypes.func.isRequired
}

Employee.defaulProps = {
    person: {},
    setProfile() {}
}

export default Employee;