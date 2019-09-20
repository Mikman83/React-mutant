import React from 'react';
import styles from './Wtf.module.css'

const Wtf  = () => {
  return (
    <div className={styles.dialogs}> {/*WTF component (blog)*/}
      <div className={styles.dialogs_list}>
        <div className={styles.dialog_item}>Арина</div>
        <div className={styles.dialog_item}>Никитос</div>
        <div className={styles.dialog_item}>Даня</div>
        <div className={`${styles.dialog_item} ${styles.active}`}>Ленок</div>
        <div className={styles.dialog_item}>Джексон</div>
        <div className={styles.dialog_item}>Диабло</div>
      </div>
      <div className={styles.messages_list}>
        <div className={styles.mesage_item}>Привет</div>
        <div className={styles.mesage_item}>Ку</div>
        <div className={styles.mesage_item}>Погнали на великах катать?</div>
      </div>
    </div>
  )
}

export default Wtf;
