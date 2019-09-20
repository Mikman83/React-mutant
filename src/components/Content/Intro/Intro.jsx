import React from 'react';
import styles from './Intro.module.css';

const Intro = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.avatar}>
          <img src="https://cdn.icon-icons.com/icons2/546/PNG/512/1455555011_users-10_icon-icons.com_53271.png" alt="avatar" />
        </div>
        <div className={styles.descr}>
          <p>Ivlev Michael</p>
          <p>{props.birthday} {props.date}</p>
          <p>{props.city} {props.spb}</p>
          <p>{props.social} {props.vk}</p>
        </div>
      </div>
    </main>
  )
}

export default Intro;