import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CircleFloating.module.css';
import Square from './Square';
import Square2 from './Square2';

const CircleFloating = () => {
    return (
        <div className={styles.CircleFloatingGridContainer}>
            <div className={styles.CircleFloating}>
                <p>
                    This is a floating circle!
                </p>
                <p className={styles.SquaresContainer}>
                    <Square />
                
                    <Square2 />
                </p>
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default CircleFloating;
