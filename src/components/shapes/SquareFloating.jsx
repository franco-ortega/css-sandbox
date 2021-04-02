import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircleFloating from './CircleFloating';
import styles from './SquareFloating.module.css';

const SquareFloating = () => {
    return (
        <>
        <CircleFloating />
        <div className={styles.SquareFloatingGridContainer}>
            <div className={styles.SquareFloatingGridItem}>
                <div className={styles.SquareFloating}>
                    <p>
                        This is a floating Square!
                    </p>
                    <Link to="/circlefloating">
                        <button>Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

SquareFloating.propTypes = {

};

export default SquareFloating;
