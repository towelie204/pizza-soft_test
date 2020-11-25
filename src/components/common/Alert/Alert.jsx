import React from 'react';
import { connect } from 'react-redux';
import { getAlerts } from '../../../__data__/selectors/assetsSelectors'

import styles from './Alert.module.css'

const Alert = (props) => {

    if (!props.alert.visible) {
        return null
    }

    return (
        <div className={styles.alertWrapper}>
            <div className={styles.alertWindow}>
                {props.message}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    alert: getAlerts(state)
})

export default connect(mapStateToProps, {})(Alert);
