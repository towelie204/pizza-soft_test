import React from 'react';
import PropTypes from 'prop-types';

import styles from './EmployeesTableHeader.module.css';

const EmployeesTableHeader = (props) => {

    const btnStyles = (props) => {
        if (props.sorting.order === true) {
            return `${styles.sortingBtn} ${styles.arrowDown }`
        } else return styles.sortingBtn
    }

    return (
        <thead>
            <tr className={styles.tableHeader}>
                {props.headers.map(header => (
                    <th key={header.title}>
                        {header.title}
                        {header.sortable && header.name === props.sorting?.name &&
                            <button onClick={header.onClick}
                                className={btnStyles(props)}>
                                <span className={styles.btnInner}>▲</span>
                            </button>}
                        {header.sortable && header.name !== props.sorting?.name &&
                            <button onClick={header.onClick}
                                className={styles.sortingBtn}>
                                <span className={styles.btnInner}>&#8211;</span>
                            </button>}
                    </th>
                ))}
            </tr>
        </thead>
    )
};

EmployeesTableHeader.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        sortable: PropTypes.bool,
        onClick: PropTypes.func
    }))
};

EmployeesTableHeader.defaultProps = {
    headers: []
}

export default EmployeesTableHeader;