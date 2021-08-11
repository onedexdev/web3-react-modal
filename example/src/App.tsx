import React, { useState } from 'react'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3ReactModal } from 'web3-react-modal'
import 'web3-react-modal/dist/index.css'
import { ethers } from 'ethers'
import connectors from './connectors'

function getLibrary(provider: any) {
  const library = new ethers.providers.Web3Provider(provider)
  return library
}

const App = () => {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AuthComponent/>
      </Web3ReactProvider>
    </>
  )
}

const AuthComponent = () => {
  const [visible, setVisible] = useState<any>(false)
  const { account, active, activate, deactivate } = useWeb3React()

  return <>
    <Web3ReactModal
      visible={visible}
      setVisible={setVisible}
      providerOptions={connectors}
      onConnect={(connector: any, name: string) => {
        localStorage.setItem('connected', name)
        activate(connector)
      }}
    />
    <p>account: {active ? account : 'N/A'}</p>
    {
      active ? (
        <button
          onClick={() => deactivate()}
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => setVisible(true)}
        >
          login
        </button>
      )
    }
  </>
}

export default App
