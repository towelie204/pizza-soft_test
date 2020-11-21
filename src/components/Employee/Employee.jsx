import React from 'react';
import styles from './Employee.module.css';
import defaulPersonImage from '../../assets/images/default_user.png';
import { NavLink } from 'react-router-dom';

const Employee = (props) => {
    return (
        <div className={ !props.person.isArchive 
                ? styles.employeeCard
                : `${styles.employeeCard} ${styles.isArchive}` }>
            <NavLink to={`/profile/${props.person.id}`}>
                <img src={props.person.image || defaulPersonImage}
                    alt={props.person.name} className={styles.personImage} />
            </NavLink>

            <div className={styles.personInfo}>
                <NavLink to={`/profile/${props.person.id}`} className={ styles.personLink }>
                    <p className={styles.personName}>{props.person.name}</p>
                </NavLink>
                <span>Должность: {
                    (props.person.role === 'driver') && 'водитель' ||
                    (props.person.role === 'waiter') && 'официант' ||
                    (props.person.role === 'cook') && 'повар'
                }</span>
                <span>Телефон: {props.person.phone}</span>
            </div>
        </div>
    )
}

export default Employee;