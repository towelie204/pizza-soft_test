import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { getProfile } from '../../__data__/selectors/employeeSelectors';
import { saveProfile } from '../../__data__/actionCreators';

import ProfileForm from './ProfileForm';

class Profile extends React.Component {
    static propTypes = {
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

    static defaultProps = {
        profile: [],
        saveProfile() {}
    }

    constructor(props) {
        super(props);
        this.state = {
            ...props.profile,
            birthday: props.profile.birthday.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1')
        }
    }
    
    createHandleChange = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    handleSelectRole = (event) => {
        this.setState({
            role: event.target.value
        })
    }

    handleIsArchive = (event) => {
        this.setState({
            isArchive: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveProfile(this.state)
    }

    render() {
        return <ProfileForm profile={this.state}
            createHandleChange={this.createHandleChange}
            handleSelectRole={this.handleSelectRole}
            handleIsArchive={this.handleIsArchive}
            handleSubmit={this.handleSubmit} />
    }
}

const mapStateToProps = (state) => ({ profile: getProfile(state) })

const mapDispatchToProps = { saveProfile }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Profile);