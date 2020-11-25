import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEmployeesList } from '../../__data__/selectors/employeeSelectors';
import { addEmployee } from '../../__data__/actionCreators';

import ProfileForm from './ProfileForm';

class AddEmployee extends React.Component {
    static propTypes = {
        employeesList: PropTypes.arrayOf(PropTypes.object).isRequired,
        addEmployee: PropTypes.func
    };
    
    static defaultProps = {
        employeesList: [],
        addEmployee() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                id: Number(props.employeesList.length + 1),
                name: '',
                isArchive: false,
                role: 'driver',
                phone: '',
                birthday: ''
            }
        }
    }

    createHandleChange = (key) => (event) => {
        this.setState(prevState => ({
            profile: {
                ...prevState.profile,
                [key]: event.target.value
            }
        }))
    }

    handleSelectRole = (event) => {
        this.setState(prevState => ({
            profile: {
                ...prevState.profile,
                role: event.target.value
            }
        }))
    }

    handleIsArchive = (event) => {
        this.setState(prevState => ({
            profile: {
                ...prevState.profile,
                isArchive: event.target.checked
            }
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addEmployee(this.state.profile)
    }

    render() {
        return <ProfileForm profile={this.state.profile}
            createHandleChange={this.createHandleChange}
            handleSelectRole={this.handleSelectRole}
            handleIsArchive={this.handleIsArchive}
            handleSubmit={this.handleSubmit} />
    }
}

const mapStateToProps = (state) => ({ employeesList: getEmployeesList(state) })

const mapDispatchToProps = { addEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);