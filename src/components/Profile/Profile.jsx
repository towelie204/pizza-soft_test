import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import styles from './Profile.module.css';
import { getProfile, rolesMap } from '../../__data__/selectors/employeeSelectors';
import { saveProfile } from '../../__data__/actionCreators';
import PhoneInput from '../common/PhoneInpit/PhoneInput';
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
        return (
            <ProfileForm profile={this.state}
                createHandleChange={this.createHandleChange}
                handleSelectRole={this.handleSelectRole}
                handleIsArchive={this.handleIsArchive}
                handleSubmit={this.handleSubmit} />

            // <div className={styles.profilePage}>
            //     <NavLink to={'/'}>Назад</NavLink>
            //     <form onSubmit={this.handleSubmit}>
            //         <div>
            //             <input type="text" value={this.state.name} onChange={this.createHandleChange('name')} />
            //         </div>
            //         <div>
            //             <PhoneInput value={this.state.phone} onChange={this.createHandleChange('phone')} />
            //         </div>
            //         <div>
            //             <select onChange={this.handleSelectRole} name="role" id="role">
            //                 {Object.entries(rolesMap).map(entry => {
            //                     if (entry[0] !== 'all') {
            //                         if (entry[0] === this.state.role) {
            //                             return <option selected value={entry[0]}>{entry[1]}</option>
            //                         }
            //                         return <option value={entry[0]}>{entry[1]}</option>
            //                     }
            //                 })}
            //             </select>
            //         </div>
            //         <div>
            //             <input type="date" value={this.state.birthday} onChange={this.createHandleChange('birthday')} />
            //         </div>
            //         <div>
            //             <label htmlFor="isArchive">В архиве: </label>
            //             <input type="checkbox" 
            //                 name="isArchive"
            //                 id="isArchive"
            //                 checked={this.state.isArchive}
            //                 onChange={this.handleIsArchive}/>
            //         </div>
            //         <div>
            //             <button>Сохранить изменения</button>
            //         </div>
            //     </form>
            // </div>
        )
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