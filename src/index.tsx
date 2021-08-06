import React from 'react'
import styles from './styles.module.css'

export const Web3ReactModal = ({
  setVisible,
  visible,
  onConnect,
  providerOptions
}: {
  setVisible: any
  visible: any
  onConnect: any
  providerOptions: any
}) => {
  const modalItems = []
  for (const name in providerOptions) {
    modalItems.push(
      <div
        className={styles.walletItem}
        key={name}
        onClick={async () => {
          onConnect(providerOptions[name].connector)
          setVisible(false)
        }}
      >
        <div className={styles.walletLogo}>
          <img
            className={styles.walletlogoImg}
            src={providerOptions[name].image}
            alt={providerOptions[name].title}
          />
        </div>
        <h2 className={styles.walletTitle}>{providerOptions[name].title}</h2>
        <div className={styles.walletDesc}>{providerOptions[name].desc}</div>
      </div>
    )
  }

  return (
    <div className={`${styles.modal} ${visible ? '' : styles.hidden}`}>
      <div className={styles.modalOverlay} onClick={() => setVisible(false)} />
      <div className={styles.modalContent}>{modalItems}</div>
    </div>
  )
}
