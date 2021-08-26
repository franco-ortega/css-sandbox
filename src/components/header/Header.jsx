import React from 'react';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

const Header = props => {
  return (
    <div className={styles.Header}>
      <h1>CSS Sandbox</h1>
      <Nav />
    </div>
  );
};

export default Header;
