import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEmployeesList } from '../../__data__/selectors/employeeSelectors';
import { addEmployee } from '../../__data__/actionCreators';

import ProfileForm from './ProfileForm';

const AddEmployee = (props) => {

    const [profile, setProfile] = useState({
        id: Number(props.employeesList.length + 1),
        name: '',
        isArchive: false,
        role: 'driver',
        phone: '',
        birthday: ''
    });

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
        props.addEmployee(profile)
    }

    return <ProfileForm profile={profile}
        createHandleChange={createHandleChange}
        handleSelectRole={handleSelectRole}
        handleIsArchive={handleIsArchive}
        handleSubmit={handleSubmit} />
}

AddEmployee.propTypes = {
    employeesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    addEmployee: PropTypes.func
};

AddEmployee.defaultProps = {
    employeesList: [],
    addEmployee() { }
}

const mapStateToProps = (state) => ({ employeesList: getEmployeesList(state) })

const mapDispatchToProps = { addEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);