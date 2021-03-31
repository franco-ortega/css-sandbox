import React from 'react';
import Circle from '../shapes/Circle';
// import PropTypes from 'prop-types';
import styles from './GridIslands.module.css';

const GridIslands = props => {
    return (
        <div className={styles.GridIslandContainer}>

            <div className={`${styles.GridIsland} ${styles.GridIslandA}`}>
                <Circle label={'GitHub'} />
            </div>

            <div className={`${styles.GridIsland} ${styles.GridIslandB}`}>
                <Circle label={'LinkedIn'} />
            </div>

            <div className={`${styles.GridIsland} ${styles.GridIslandC}`}>
                <Circle label={'Email'} />
            </div>

            <div className={`${styles.GridIsland} ${styles.GridIslandD}`}>
                <Circle label={'Twitter'} />
            </div>
            
        </div>
    );
};

GridIslands.propTypes = {

};

export default GridIslands;
