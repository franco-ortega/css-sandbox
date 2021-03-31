import React from 'react';
import RectangleSoftEdge from '../shapes/RectangleSoftEdge';
import RectangleTall from '../shapes/RectangleTall';
import GridIslands from './GridIslands';
// import PropTypes from 'prop-types';
import styles from './GridMap6x5.module.css';
import styles2 from '../shapes/RectangleSoftEdge.module.css';
import Circle from '../shapes/Circle';

const GridMap6x5 = () => {
    return (
        <div className={styles.GridMap6x5}>
            <div className={styles.GridContainer}>
                <div className={styles.GridItem}>1</div>
                <div className={styles.GridItem}>2</div>
                <div className={`${styles.GridItem} ${styles.GridItem3}`}>
                    Franco Ortega
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem4}`}>
                    <RectangleTall />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem5}`}>
                    <RectangleSoftEdge
                        label={'Profile'}
                        borderShape={styles2.Profile}
                    />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem6}`}>
                    <RectangleSoftEdge
                        label={'Team Projects'}
                        borderShape={styles2.Projects}
                    />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItemCart}`}>
                <Circle label={'Maps'} />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem7}`}>
                    <GridIslands />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem8}`}>
                    <RectangleSoftEdge
                        label={'Resume'}
                        borderShape={styles2.Resume}
                    />
                </div>
                <div className={`${styles.GridItem} ${styles.GridItem9}`}>Compass</div>
                {/* <div className={styles.GridItem}>13</div> */}
            </div>

        </div>
    );
};

GridMap6x5.propTypes = {

};

export default GridMap6x5;
