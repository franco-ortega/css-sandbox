import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <ul className={styles.Nav}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/grid'>Grid</Link></li>
      <li><Link to='/gridmap6x5'>Grid Map (6 x 5)</Link></li>
      <li><Link to='/gridmap9x5'>Grid Map (9 x 5)</Link></li>
      <li><Link to='/shapes'>Shapes</Link></li>
      <li><Link to='/circlefloating'>Circle</Link></li>
      <li><Link to='/hsl'>HSL</Link></li>
    </ul>
  );
};

export default Nav;
