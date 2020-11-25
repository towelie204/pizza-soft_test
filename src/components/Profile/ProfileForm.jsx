import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { rolesMap } from '../../__data__/selectors/employeeSelectors';
import PhoneInput from '../common/PhoneInpit/PhoneInput';

import styles from './Profile.module.css';

const ProfileForm = (props) => (
    <div className={styles.profilePage}>
        <NavLink to={'/'}>Назад</NavLink>
        <form className={styles.employeeForm} onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Имя, фамилия</label>
                <input required={true} 
                    type="text"
                    id="name"
                    name="name"
                    value={props.profile.name}
                    onChange={props.createHandleChange('name')}
                    pattern="[А-ЯЁ][а-яё]{1,12}\s[А-ЯЁ][а-яё]{1,13} ?"/>
            </div>
            <div>
                <label htmlFor="phone">Телефон</label>
                <PhoneInput name="phone"
                    id="phone"
                    value={props.profile.phone}
                    onChange={props.createHandleChange('phone')}/>
            </div>
            <div className={styles.select}>
                <label htmlFor="role">Должность</label>
                <select defaultValue={props.profile.role} 
                    onChange={props.handleSelectRole} 
                    name="role" id="role">
                    {Object.entries(rolesMap).map(entry => {
                        if (entry[0] !== 'all') {
                            return <option key={entry[0]} value={entry[0]}>{entry[1]}</option>
                        }
                        return null
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="birthday">Дата рождения</label>
                <input required={true}
                    name="birthday"
                    id="birthday"
                    type="date"
                    value={props.profile.birthday}
                    onChange={props.createHandleChange('birthday')}/>
            </div>
            <div className={styles.archive}>
                <label htmlFor="isArchive">В архиве: </label>
                <input type="checkbox"
                    name="isArchive"
                    id="isArchive"
                    checked={props.profile.isArchive}
                    onChange={props.handleIsArchive}/>
            </div>
            <div>
                <button className={styles.submitBtn}>Сохранить изменения</button>
            </div>
        </form>
    </div>
)


ProfileForm.propTypes = {
    profile: PropTypes.object,
    createHandleChange: PropTypes.func.isRequired,
    handleSelectRole: PropTypes.func.isRequired,
    handleIsArchive: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

ProfileForm.defaultProps = {
    profile: {},
    createHandleChange() {},
    handleSelectRole() {},
    handleIsArchive() {},
    handleSubmit() {}
}

export default ProfileForm;