import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Hexagon.module.css';

const Hexagon = props => {
    return (
        <div className={styles.HexContainer}>
            <div className={styles.Hexagon}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon3}></div>
            <div className={styles.Hexagon}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon2}></div>
            <div className={styles.Hexagon3}></div>
        </div>
    );
};

Hexagon.propTypes = {

}

export default Hexagon
