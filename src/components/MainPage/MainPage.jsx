import React from 'react';

import EmployeesTable from '../EmployeesTable/EmployeesTable';
import FilterForm from '../FilterForm/FilterForm';

import styles from './MainPage.module.css';

const MainPage = (props) => (
    <div className={styles.mainPage}>
        <FilterForm />
        <EmployeesTable />
    </div>
)

export default MainPage;