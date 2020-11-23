import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InputMask from 'react-input-mask';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './Profile.module.css';
import { getProfile, rolesMap } from '../../__data__/selectors/employeeSelectors';
import { saveProfile } from '../../__data__/actionCreators';

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.saveProfile(this.state)
    }

    handleSelectRole = (event) => {
        this.setState({
            role: event.target.value
        })
    }
   
    render() {
        return (
            <div className={styles.profilePage}>
                <NavLink to={'/'}>Назад</NavLink>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.name} onChange={this.createHandleChange('name')} />
                    </div>
                    <div>
                        <PhoneInput value={this.state.phone} onChange={this.createHandleChange('phone')} />
                    </div>
                    <div>
                        <select onChange={this.handleSelectRole} name="role" id="role">
                            {Object.entries(rolesMap).map(entry => {
                                if (entry[0] !== 'all') {
                                    return <option value={entry[0]}>{entry[1]}</option>
                                }
                            })}
                        </select>
                    </div>
                    <div>
                        <input type="date" value={this.state.birthday} onChange={this.createHandleChange('birthday')} />
                    </div>
                    <div>
                        <button>Сохранить изменения</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ profile: getProfile(state) })

const mapDispatchToProps = { saveProfile }

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(Profile);


class PhoneInput extends React.Component {
    render() {
        return <InputMask {...this.props} mask="+7\ (999) 999-9999" maskChar=" " />;
    }
}