export const injectedInstallLinks = [
  {
    icon: 'MetamaskIcon',
    name: 'Metamask',
    link: 'https://metamask.io/download/'
  },
  {
    icon: 'EzdefiIcon',
    name: 'Ezdefi',
    link: 'https://chrome.google.com/webstore/detail/ezdefi/ejeemacpidnaejkhpbmfkadhgjhnolaa'
  },
  {
    icon: 'TrustWalletIcon',
    name: 'TrustWallet',
    link: 'https://trustwallet.com/download'
  },
  {
    icon: 'CoinBaseIcon',
    name: 'CoinBase',
    link: 'https://www.coinbase.com/wallet'
  }
]

const injected = {
  images: ['MetamaskIcon', 'EzdefiIcon', 'TrustWalletIcon', 'CoinBaseIcon'],
  title: 'Injected Wallets'
}

if (window.location.hostname.includes('lz.finance')) {
  injected.images.splice(2, 0, 'LaunchzoneIcon')
  injectedInstallLinks.splice(2, 0, {
    icon: 'LaunchzoneIcon',
    name: 'Launchzone',
    link: 'https://docs.lz.finance/our-products/lz-wallet'
  })
}

const walletconnect = {
  images: ['WalletConnectIcon'],
  title: 'WalletConnect'
}

const authereum = {
  images: ['AuthereumIcon'],
  title: 'Authereum'
}

const torus = {
  images: ['TorusIcon'],
  title: 'Torus'
}

const fortmatic = {
  images: ['FortmaticIcon'],
  title: 'Fortmatic'
}

const magic = {
  images: ['MagicIcon'],
  title: 'Magic'
}

const portis = {
  images: ['PortisIcon'],
  title: 'Portis'
}

const ledger = {
  images: ['LedgerIcon'],
  title: 'Ledger'
}

const frame = {
  images: ['FrameIcon'],
  title: 'Frame'
}

export default {
  injected,
  torus,
  authereum,
  walletconnect,
  fortmatic,
  magic,
  portis,
  ledger,
  frame
}
