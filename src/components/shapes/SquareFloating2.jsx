import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircleFloating from './CircleFloating';
import styles from './SquareFloating2.module.css';

const SquareFloating2 = () => {
    return (
        <>
        <CircleFloating />
        <div className={styles.SquareFloating2GridContainer}>
            <div className={styles.SquareFloating2GridItem}>
                <div className={styles.SquareFloating2}>
                    <p>
                        This is another floating Square!
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

SquareFloating2.propTypes = {

};

export default SquareFloating2;
