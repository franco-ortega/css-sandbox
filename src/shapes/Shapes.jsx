import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Shapes.module.css';

const Shapes = () => {
    return (
        <div className={styles.Shapes}>
            <h2>Shapes</h2>
            <p>
            <a href="https://duckduckgo.com/">Quack</a>
            </p>
            <div className={styles.Box}></div>
            <div className={styles.Rectangle}></div>
        </div>
    );
};

Shapes.propTypes = {

};

export default Shapes;
