import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GridMap9x5.module.css';

const GridMap9x5 = () => {
    return (
        <div className={styles.GridMap9x5}>
            <div className={styles.GridContainer}>
                <div className={styles.GridItem}>1</div>
                <div className={styles.GridItem}>2</div>
                <div className={styles.GridItem}>3</div>
                <div className={`${styles.GridItem} ${styles.GridItem4}`}>4</div>
                <div className={styles.GridItem}>5</div>
                <div className={`${styles.GridItem} ${styles.GridItem6}`}>6</div>
                {/* <div className={styles.GridItem}>7</div>
                <div className={styles.GridItem}>8</div> */}
                <div className={`${styles.GridItem} ${styles.GridItem9}`}>9</div>
                <div className={`${styles.GridItem} ${styles.GridItem10}`}>10</div>
                <div className={`${styles.GridItem} ${styles.GridItem11}`}>11</div>
                <div className={`${styles.GridItem} ${styles.GridItem12}`}>12</div>
                <div className={`${styles.GridItem} ${styles.GridItem13}`}>13</div>
                {/* <div className={styles.GridItem}>13</div> */}
                {/* <div className={styles.GridItem}>14</div>
                <div className={styles.GridItem}>15</div>
                <div className={styles.GridItem}>16</div>
                <div className={styles.GridItem}>17</div>
                <div className={styles.GridItem}>18</div> */}
            </div>

        </div>
    );
};

GridMap9x5.propTypes = {

};

export default GridMap9x5;
