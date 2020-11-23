import React from 'react';
import PropTypes from 'prop-types';

import styles from './EmployeesTableHeader.module.css';

const EmployeesTableHeader = (props) => {

    return (
        <thead>
            <tr>
                {props.headers.map(header => (
                    <th key={header.title}>
                        {header.title}
                        {header.sortable &&
                            <button onClick={header.onClick}
                                className={(header.name === props.sorting?.name
                                    && props.sorting.order === true
                                    && styles.arrowDown) ||
                                    (header.name !== props.sorting?.name
                                        && styles.arrowSide)}>
                                ▲
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