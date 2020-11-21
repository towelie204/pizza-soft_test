import React from 'react';
import styles from './Employee.module.css';
import defaulPersonImage from '../../assets/images/default_user.png';
import { NavLink } from 'react-router-dom';

const Employee = (props) => (
    <tr className={!props.person.isArchive
        ? styles.employeeCard
        : `${styles.employeeCard} ${styles.isArchive}`}>

        <td className={styles.personInfo}>
            <NavLink to={`/profile/${props.person.id}`} className={styles.personLink}>
                <span className={styles.personName}>{props.person.name}</span>
            </NavLink>
        </td>
        <td>
            <span>
                {
                    (props.person.role === 'driver') && 'водитель' ||
                    (props.person.role === 'waiter') && 'официант' ||
                    (props.person.role === 'cook') && 'повар'
                }
            </span>
        </td>
        <td>
            <span>{props.person.phone}</span>
        </td>
        <td>
            <span>{props.person.birthday}</span>
        </td>
    </tr >
)

export default Employee;