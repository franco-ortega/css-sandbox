import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CircleFloating.module.css';
import Square from './Square';
import Square2 from './Square2';

const CircleFloating = () => {
    return (
        <div className={styles.CircleFloatingGridContainer}>

            <div className={styles.CircleFloatingGridItem}>


        <div className={styles.CircleFloating}>
            <p>
                This is a floating circle!
            </p>
            <p>
                <Square />
                <Square2 />
            </p>
            <Link to="/">
                <button>Go Home</button>
            </Link>

        </div>

            </div>
        </div>
    );
};

CircleFloating.propTypes = {

};

export default CircleFloating;
