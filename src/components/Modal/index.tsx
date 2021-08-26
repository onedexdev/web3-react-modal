import React from 'react'
import styles from '../../styles.module.css'

export const Modal = ({
  setVisible,
  visible,
  children
}: {
  setVisible: any
  visible: any
  children: any
}) => {
  return (
    <div className={`${styles.modal} ${visible ? '' : styles.hidden}`}>
      <div className={styles.modalOverlay} onClick={() => setVisible(false)} />
      <div className={styles.modalContent}>{children}</div>
    </div>
  )
}
