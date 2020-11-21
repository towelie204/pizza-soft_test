import React from 'react';
import PropTypes from 'prop-types';

const EmployeesTableHeader = (props) => {
    console.log(props);
    return (
        <thead>
            <tr>
                {props.headers.map(header => (
                    <th key={header.title}>
                        {header.title}
                        {header.sortable && <button onClick={header.onClick}>▲</button>}
                        {/* {header.sortable && (props?.sorting?.order) 
                        && <button onClick={header.onClick}>▲</button>}
                        {header.sortable && (!props.sorting) 
                        && <button onClick={header.onClick}>▼</button>} */}
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