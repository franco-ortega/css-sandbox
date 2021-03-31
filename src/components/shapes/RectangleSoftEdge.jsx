import React from 'react';
import PropTypes from 'prop-types';
import styles from './RectangleSoftEdge.module.css';

const RectangleSoftEdge = ({ label, borderShape }) => {
    return (
        <div
            className={`${styles.RectangleSoftEdge} ${borderShape}`}
        >
            {label}
        </div>
    );
};

RectangleSoftEdge.propTypes = {
    label: PropTypes.string.isRequired,
    borderShape: PropTypes.string.isRequired
};

export default RectangleSoftEdge;
