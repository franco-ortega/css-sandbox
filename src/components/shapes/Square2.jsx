import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Square2.module.css';

const Square2 = () => {
    return (
        <div className={styles.Square2}>
            <p>
                This is a second Square!
            </p>
            <Link to="/squarefloating2">
                <button>Square Details</button>
            </Link>

        </div>
    );
};

Square2.propTypes = {

};

export default Square2;
