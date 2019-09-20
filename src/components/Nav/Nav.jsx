import React from 'react';
import styles from  './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li className={styles.item}>
            <NavLink to="/Intro" activeClassName={styles.active}>Intro</NavLink>
        </li>
        <li className={styles.item}>
            <NavLink to="/Maintheme" activeClassName={styles.active}>Main Theme</NavLink>
        </li>
        <li className={styles.item}>
            <NavLink to="/Wtf" activeClassName={styles.active}>WTF</NavLink>
        </li>
        <li className={styles.item}>
            <NavLink to="/Oneway" activeClassName={styles.active}>One Way</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
