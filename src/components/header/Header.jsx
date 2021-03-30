import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = props => {
    return (
        <div className={styles.Header}>
            <section>
            <h1>CSS Sandbox</h1>
            </section>
            <section>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/grid'>Grid</Link></li>
                    <li><Link to='/shapes'>Shapes</Link></li>
                </ul>
            </section>
            
        </div>
    );
};

Header.propTypes = {

};

export default Header;
