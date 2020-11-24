import React from 'react';
import styles from './Employee.module.css';
import { NavLink } from 'react-router-dom';

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

export default Employee;