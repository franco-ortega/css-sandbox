import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Grid.module.css';

const Grid = props => {
    return (
        <div className={styles.Grid}>
            <h2>Grid</h2>
            <div className={styles.GridContainer}>
                <div className={styles.GridItem}>1</div>
                <div className={styles.GridItem}>2</div>
                <div className={`${styles.GridItem} ${styles.GridItem3}`}>3</div>
                <div className={styles.GridItem}>4</div>
                <div className={styles.GridItem}>5</div>
                <div className={styles.GridItem}>6</div>
                <div className={styles.GridItem}>7</div>
                <div className={styles.GridItem}>8</div>
                <div className={`${styles.GridItem} ${styles.GridItem9}`}>9</div>
            </div>
        </div>
    );
};

Grid.propTypes = {

};

export default Grid;
