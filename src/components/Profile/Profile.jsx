import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { getProfile } from '../../__data__/selectors/employeeSelectors';
import { saveProfile } from '../../__data__/actionCreators';

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
        props.saveProfile(profile)
    }

    return <ProfileForm profile={profile}
        createHandleChange={createHandleChange}
        handleSelectRole={handleSelectRole}
        handleIsArchive={handleIsArchive}
        handleSubmit={handleSubmit} />
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
    saveProfile() { }
}

const mapStateToProps = (state) => ({ profile: getProfile(state) })

const mapDispatchToProps = { saveProfile }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Profile);