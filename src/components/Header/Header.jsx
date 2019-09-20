import React from 'react';
import styles from './Header.module.css';
import helloImg from './crumbaugh.jpg';

const Header = () => {
  return (
    <header className={styles.wrapper}>

      <div className={styles.img}>
        <img src={helloImg} alt="Fjords" />
      </div>
    </header>
  )
}

export default Header;