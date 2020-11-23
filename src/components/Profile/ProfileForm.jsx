import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './Profile.module.css';
import { fetchEmployeesTable, setProfile } from '../../__data__/actionCreators';
import { getProfile } from '../../__data__/selectors/employeeSelectors';

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {profile: this.props.profile}
        console.log(this.state)
    }

    componentDidMount() {
        let profileId = this.props.match.params.personId;
        if (!profileId) {
            console.log('error! страница не найдена')
        }
        this.props.setProfile(profileId);
    }

    componentDidUpdate() {
        let profileId = this.props.match.params.personId;
        if (!profileId) {
            console.log('error! страница не найдена')
        }
        this.props.setProfile(profileId);
    }
        
    render() {
        return (
            <div className={styles.profilePage}>
                <NavLink to={'/'}>Назад</NavLink>
                {!this.props.profile && 'something wrong...'}
                {this.props.profile && <form>
                    <div>
                        <input type="text" value={this.props.profile.name} />
                    </div>
                    <div>
                        <input type="text" value={this.props.profile.phone} />
                    </div>
                    <div>
                        <input type="text" value={this.props.profile.role} />
                    </div>
                    <div>
                        <input type="text" value={this.props.profile.birthday} />
                    </div>
                    <div>
                        <button>Сохранить изменения</button>
                    </div>
                </form>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ profile: getProfile(state) })

const mapDispatchToProps = { fetchEmployeesTable, setProfile }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileForm);