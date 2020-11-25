import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

class PhoneInput extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        name: 'phone',
        id: 'phone',
        value: '',
        onChange() {}
    }

    render() {
        return <InputMask {...this.props} 
            mask="+7\ (999) 999-9999" 
            maskChar=" " 
            pattern="\+[0-9]{1} \([0-9]{3}\) [0-9]{3}-[0-9]{4}" 
            type="tel" 
            alwaysShowMask="true"/>;
    }
}

export default PhoneInput;