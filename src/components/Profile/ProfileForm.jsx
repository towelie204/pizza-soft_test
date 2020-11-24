import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.css';
import {  rolesMap } from '../../__data__/selectors/employeeSelectors';
import PhoneInput from '../common/PhoneInpit/PhoneInput';

const ProfileForm = (props) => (
    <div className={styles.profilePage}>
        <NavLink to={'/'}>Назад</NavLink>
        <form className={styles.employeeForm} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Имя, фамилия</label>
                <input type="text" 
                    id="name"
                    name="name"
                    value={props.profile.name} 
                    onChange={props.createHandleChange('name')} />
            </div>
            <div>
                <label htmlFor="phone">Телефон</label>
                <PhoneInput name="phone"
                    id="phone" 
                    value={props.profile.phone} 
                    onChange={props.createHandleChange('phone')} />
            </div>
            <div className={styles.select}>
                <label htmlFor="role">Должность</label>
                <select onChange={props.handleSelectRole} name="role" id="role">
                    {Object.entries(rolesMap).map(entry => {
                        if (entry[0] !== 'all') {
                            if (entry[0] === props.profile.role) {
                                return <option selected value={entry[0]}>{entry[1]}</option>
                            }
                            return <option value={entry[0]}>{entry[1]}</option>
                        }
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="birthday">Дата рождения</label>
                <input name="birthday"
                    id="birthday"
                    type="date" 
                    value={props.profile.birthday} 
                    onChange={props.createHandleChange('birthday')} />
            </div>
            <div className={styles.archive}>
                <label htmlFor="isArchive">В архиве: </label>
                <input type="checkbox"
                    name="isArchive"
                    id="isArchive"
                    checked={props.profile.isArchive}
                    onChange={props.handleIsArchive} />
            </div>
            <div>
                <button className={styles.submitBtn}>Сохранить изменения</button>
            </div>
        </form>
    </div>
)

export default ProfileForm;