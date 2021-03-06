import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getProfile } from '../../__data__/selectors/employeeSelectors';
import { fetchEmployeesTable, setProfile, saveProfile, showAlert } from '../../__data__/actionCreators';
import Alert from '../common/Alert/Alert';

import ProfileForm from './ProfileForm';

const Profile = (props) => {

    const [profile, setProfile] = useState({
        ...props.profile,
        birthday: props.profile.birthday.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1')
    })

    const createHandleChange = (key) => (event) => {
        setProfile(prevState => ({
            ...prevState,
            [key]: event.target.value
        }))
    }

    const handleSelectRole = (event) => {
        setProfile(prevState => ({
            ...prevState,
            role: event.target.value
        }))
    }

    const handleIsArchive = (event) => {
        setProfile(prevState => ({
            ...prevState,
            isArchive: event.target.checked
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.saveProfile(profile);
        props.showAlert();
    }

    return (
        <>
            <Alert message='Данные сохранены' />
            <ProfileForm profile={profile}
                createHandleChange={createHandleChange}
                handleSelectRole={handleSelectRole}
                handleIsArchive={handleIsArchive}
                handleSubmit={handleSubmit} />
        </>
    )
}

Profile.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isArchive: PropTypes.bool.isRequired,
        role: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired
    }).isRequired,
    saveProfile: PropTypes.func
}

Profile.defaultProps = {
    profile: [],
    saveProfile() {}
}

const mapStateToProps = (state) => ({ profile: getProfile(state) })

const mapDispatchToProps = { fetchEmployeesTable, setProfile, saveProfile, showAlert }

export default connect(mapStateToProps, mapDispatchToProps)(Profile);