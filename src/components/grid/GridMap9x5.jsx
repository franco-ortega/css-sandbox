import React from 'react';
// import PropTypes from 'prop-types';
import styles from './GridMap9x5.module.css';

const GridMap9x5 = props => {
    return (
        <div className={styles.GridMap9x5}>
            <div className={styles.GridContainer}>
                <div className={styles.GridItem}>1</div>
                <div className={styles.GridItem}>2</div>
                <div className={styles.GridItem}>3</div>
                <div className={`${styles.GridItem} ${styles.GridItem4}`}>4</div>
                <div className={styles.GridItem}>5</div>
                <div className={`${styles.GridItem} ${styles.GridItem6}`}>6</div>
                {/* <div className={styles.GridItem}>7</div>
                <div className={styles.GridItem}>8</div> */}
                <div className={`${styles.GridItem} ${styles.GridItem9}`}>9</div>
                <div className={`${styles.GridItem} ${styles.GridItem10}`}>10</div>
                <div className={`${styles.GridItem} ${styles.GridItem11}`}>11</div>
                <div className={`${styles.GridItem} ${styles.GridItem12}`}>12</div>
                <div className={`${styles.GridItem} ${styles.GridItem13}`}>13</div>
                {/* <div className={styles.GridItem}>13</div> */}
                {/* <div className={styles.GridItem}>14</div>
                <div className={styles.GridItem}>15</div>
                <div className={styles.GridItem}>16</div>
                <div className={styles.GridItem}>17</div>
                <div className={styles.GridItem}>18</div> */}
                {/* <div className={`${styles.GridItem}`}>19</div> */}
                {/* <div className={styles.GridItem}>20</div> */}
                {/* <div className={styles.GridItem}>21</div>
                <div className={styles.GridItem}>22</div>
                <div className={`${styles.GridItem}`}>23</div>
                <div className={styles.GridItem}>24</div>
                <div className={styles.GridItem}>25</div> */}
                {/* <div className={styles.GridItem}>26</div> */}
                {/* <div className={styles.GridItem}>27</div> */}
                {/* <div className={styles.GridItem}>28</div>
                <div className={`${styles.GridItem}`}>29</div>
                <div className={styles.GridItem}>30</div> */}
            </div>

        </div>
    );
};

GridMap9x5.propTypes = {

};

export default GridMap9x5;
