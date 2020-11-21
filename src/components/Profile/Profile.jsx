import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './Profile.module.css';
import { setProfile } from '../../redux/profile-reducer';

class Profile extends React.Component {
    componentDidMount() {

        let profileId = this.props.match.params.personId;
        if (!profileId) {
            console.log('error 404: страница не найдена')
        }
        this.props.setProfile(profileId);

    }

    componentDidUpdate() {
        
        let profileId = this.props.match.params.personId;
        if (!profileId) {
            console.log('error 404: страница не найдена')
        }
        this.props.setProfile(profileId);

    }

    render() {
        return <div className={ styles.profilePage }>
            {!this.props.profile && 'Fuck!'}
            {this.props.profile && <div>
                <div>{ this.props.profile.name }</div>
                <div>{ this.props.profile.phone }</div>
                <div>{ this.props.profile.role }</div>
                <div>{ this.props.profile.birthday }</div>
            </div>}
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.employeesList.profile
    }
}

//const ProfileContainer = connect(mapStateToProps, {})(Profile);

export default compose(
    connect(mapStateToProps, { setProfile }),
    withRouter
)(Profile);