import React from 'react';
import InputMask from 'react-input-mask';

class PhoneInput extends React.Component {
    render() {
        return <InputMask {...this.props} mask="+7\ (999) 999-9999" 
            maskChar=" " alwaysShowMask="true"/>;
    }
}

export default PhoneInput;

//pattern="/\+7\s\(\d{3}\)\s\d{3}-\d{4}/"
