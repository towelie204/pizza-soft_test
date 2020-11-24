import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.css';
import { getEmployeesList, rolesMap } from '../../__data__/selectors/employeeSelectors';
import { addEmployee } from '../../__data__/actionCreators';
import PhoneInput from '../common/PhoneInpit/PhoneInput';
import ProfileForm from './ProfileForm';

class AddEmployee extends React.Component {
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
        this.setState( prevState => ({
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
        return (
            <ProfileForm profile={this.state.profile}
                createHandleChange={this.createHandleChange}
                handleSelectRole={this.handleSelectRole}
                handleIsArchive={this.handleIsArchive}
                handleSubmit={this.handleSubmit} />
            // <div className={styles.profilePage}>
            //     <NavLink to={'/'}>Назад</NavLink>
            //     <form onSubmit={this.handleSubmit}>
            //         <div>
            //             <input type="text" 
            //                 value={this.state.profile.name} 
            //                 onChange={this.createHandleChange('name')} />
            //         </div>
            //         <div>
            //             <PhoneInput value={this.state.profile.phone} onChange={this.createHandleChange('phone')} />
            //         </div>
            //         <div>
            //             <select onChange={this.handleSelectRole} name="role" id="role">
            //                 {Object.entries(rolesMap).map(entry => {
            //                     if (entry[0] !== 'all') {
            //                         return <option value={entry[0]}>{entry[1]}</option>
            //                     }
            //                 })}
            //             </select>
            //         </div>
            //         <div>
            //             <input type="date" value={this.state.profile.birthday} onChange={this.createHandleChange('birthday')} />
            //         </div>
            //         <div>
            //             <label htmlFor="isArchive">В архиве: </label>
            //             <input type="checkbox" 
            //                 name="isArchive"
            //                 id="isArchive"
            //                 checked={this.state.profile.isArchive}
            //                 onChange={this.handleIsArchive}/>
            //         </div>
            //         <div>
            //             <button>Добавить сотрудника</button>
            //         </div>
            //     </form>
            // </div>
        )
    }
}

const mapStateToProps = (state) => ({ employeesList: getEmployeesList(state) })

const mapDispatchToProps = { addEmployee }

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);