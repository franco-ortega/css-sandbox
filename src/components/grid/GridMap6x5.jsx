import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GridMap6x5.module.css';

const GridMap6x5 = props => {
    return (
        <div className={styles.GridMap6x5}>
            <div className={styles.GridContainer}>
                <div className={styles.GridItem}>1</div>
                <div className={styles.GridItem}>2</div>
                <div className={`${styles.GridItem} ${styles.GridItem3}`}>3</div>
                <div className={`${styles.GridItem} ${styles.GridItem4}`}>4</div>
                <div className={`${styles.GridItem} ${styles.GridItem5}`}>5</div>
                <div className={`${styles.GridItem} ${styles.GridItem6}`}>6</div>
                <div className={`${styles.GridItem} ${styles.GridItem7}`}>7</div>
                <div className={`${styles.GridItem} ${styles.GridItem8}`}>8</div>
                {/* <div className={`${styles.GridItem} ${styles.GridItem13}`}>13</div> */}
                {/* <div className={styles.GridItem}>13</div> */}
            </div>

        </div>
    );
};

GridMap6x5.propTypes = {

};

export default GridMap6x5;
