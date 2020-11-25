import React from 'react';
import { connect } from 'react-redux';

import { getPreloader } from '../../../__data__/selectors/assetsSelectors';

import styles from './Preloader.module.css';

const Preloader = (props) => {
    if (!props.preloader.visible) {
        return null
    }

    return (
        <div className={styles.preloaderWrapper}>
            <div className={styles.preloader}></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    preloader: getPreloader(state)
})

export default connect(mapStateToProps, {})(Preloader);