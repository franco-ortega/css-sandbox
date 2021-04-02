import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Square.module.css';

const Square = () => {
    return (
        <div className={styles.Square}>
            <p>
                This is a Square!
            </p>
            <Link to="/squarefloating">
                <button>Square Details</button>
            </Link>

        </div>
    );
};

Square.propTypes = {

};

export default Square;
