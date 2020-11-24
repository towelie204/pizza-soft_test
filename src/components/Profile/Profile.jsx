import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile } from '../../__data__/selectors/employeeSelectors';
import { saveProfile } from '../../__data__/actionCreators';
import ProfileForm from './ProfileForm';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.profile
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
        console.log(this.state.phone)
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



// class BirthdayInput extends React.Component {
//     render() {
//         return <InputMask {...this.props} mask="99.99.9999" pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}" maskChar=" " />;
//     }
// }