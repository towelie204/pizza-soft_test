import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { employeesAPI } from '../../api/api';
import styles from './EmployeesList.module.css';
import { setEmployeesList } from '../../redux/employees-reducer';
import * as axios from 'axios';
import Employee from '../Employee/Employee';


// let employees = fetch('https://raw.githubusercontent.com/towelie204/test_API/master/employees.json')
//   .then((res) => res.json().then(data => console.log(`data: ${data}`)) )



// const EmployeesList = (props) => {
//     useEffect(() => {
//         let getUsers = employeesAPI();
//         // console.log(getUsers)
//     })

//     return (
//         <div className={styles.employeesList}>
//             {

//             }
//         </div>
//     )
// }


// работает, но попробую на хуках
class EmployeesListAPI extends React.Component {

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/towelie204/test_API/master/employees.json').then(res => {
            this.props.setEmployeesList(res.data)
        });
    }

    render() {
        return <div className={styles.employeesList}>
            {
                this.props.employeesList.map((person) => {
                    return <Employee person={person} />
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        employeesList: state.employeesList.employeesList
    }
}

const EmployeesList = connect(mapStateToProps, { setEmployeesList })(EmployeesListAPI);

export default EmployeesList;