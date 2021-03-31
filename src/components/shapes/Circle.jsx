import React from 'react';
import PropTypes from 'prop-types';
import styles from './Circle.module.css';

const Circle = ({ label }) => {
    return (
        <div className={styles.Circle}>
            {label}
        </div>
    );
};

Circle.propTypes = {
    label: PropTypes.string.isRequired
};

export default Circle;
