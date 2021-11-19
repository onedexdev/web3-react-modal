import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '../../styles.module.css'
import { Modal } from '../Modal'
import supportedConnectors, {
  injectedInstallLinks
} from '../../config/supportedConnectors'
import Icons from '../Icons'
import { openWebsocket } from '../../utils'
import Form from '../Form'

const WalletNeedCheck = {
  frame: {
    name: 'frame',
    website: 'https://frame.sh',
    http: 'ws://127.0.0.1:1248'
  },
  magic: {
    name: 'magic'
  },
  portis: {
    name: 'portis'
  }
}
const checkWalletAvailability = async (name: string) => {
  switch (name) {
    case WalletNeedCheck.frame.name:
      console.info({ name })
      return await new Promise((resolve) => {
        openWebsocket(WalletNeedCheck.frame.http, (_, err) => {
          if (err) return resolve(false)
          return resolve(true)
        })
      })
    default:
      return true
  }
}
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
  const [dontHaveProvider, setDontHaveProvider] = useState<any>(false)
  const [isShowForm, showHideForm] = useState(false)
  const dic = useRef({
    connector: null,
    name: ''
  })
  const modalItems = []

  // back to select wallet when popup toggle
  useEffect(() => {
    setDontHaveProvider(false)
    showHideForm(false)
    dic.current = {
      connector: null,
      name: ''
    }
  }, [visible])

  // render web3-react connectors
  for (const name in providerOptions) {
    if (!supportedConnectors[name]) continue
    const connector = providerOptions[name].connector

    const logos = []
    for (const i in supportedConnectors[name].images) {
      const WalletIcon = Icons[supportedConnectors[name].images[i]]
      logos.push(<WalletIcon key={i} />)
    }

    modalItems.push(
      <div
        className={`${styles.walletItem} ${
          name === 'injected' ? styles.injectedWalletItem : ''
        }`}
        key={name}
        onClick={async () => {
          // @ts-ignore
          if (name === 'injected' && !window.ethereum) {
            setDontHaveProvider(true)
          } else if (!(await checkWalletAvailability(name))) {
            setVisible(false)
            WalletNeedCheck[name] &&
              WalletNeedCheck[name].website &&
              window.open(WalletNeedCheck[name].website)
          } else if (name === 'magic') {
            showHideForm(true)
            dic.current.connector = connector
            dic.current.name = name
          } else {
            onConnect(connector, name)
            setVisible(false)
          }
        }}
      >
        <span
          className={
            logos.length === 1 ? styles.smallWalletLogos : styles.walletLogos
          }
        >
          {logos}
        </span>
        <span className={styles.walletTitle}>
          {supportedConnectors[name].title}
        </span>
      </div>
    )
  }
  const handleLogin = useCallback((email: string) => {
    onConnect(dic.current.connector, dic.current.name, email)
    setVisible(false)
  }, [])
  const renderFormLogin = useCallback(() => {
    return <Form buttinTitle='Login' onConfirm={handleLogin} />
  }, [])
  return (
    <Modal setVisible={setVisible} visible={visible}>
      {dontHaveProvider ? (
        // show this popup when cannot find provide
        <div className={styles.dontHaveProvider}>
          <span>Login Your Wallet</span>
          <span>
            No extension/wallet detected from your browser, please install one
            of the following extension/wallet to connect.
          </span>
          <div>
            {injectedInstallLinks.map((item, key) => {
              const Icon = Icons[item.icon]
              return (
                <a
                  key={key}
                  className={styles.injectedWalletToInstall}
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </div>
          <div>
            <span
              className={styles.btnBack}
              onClick={() => setDontHaveProvider(false)}
            >
              &#8592; Back
            </span>
          </div>
        </div>
      ) : isShowForm ? (
        renderFormLogin && renderFormLogin()
      ) : (
        <div className={styles.web3Modal}>{modalItems}</div>
      )}
    </Modal>
  )
}
