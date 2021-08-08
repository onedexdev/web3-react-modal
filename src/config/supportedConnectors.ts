export const injectedInstallLinks = [
  {
    icon: 'MetamaskIcon',
    name: 'Metamask',
    link: 'https://metamask.io/download.html'
  },
  {
    icon: 'EzdefiIcon',
    name: 'Ezdefi',
    link: 'https://ezdefi.com/products/walletapp/'
  },
  {
    icon: 'LaunchzoneIcon',
    name: 'Launchzone',
    link: 'https://launchzone.org/'
  },
  {
    icon: 'TrustWalletIcon',
    name: 'TrustWallet',
    link: 'https://trustwallet.com/download-page'
  }
]

const injected = {
  images: ['MetamaskIcon', 'EzdefiIcon', 'LaunchzoneIcon', 'TrustWalletIcon'],
  title: 'Injected wallet'
}

const walletconnect = {
  images: ['WalletConnectIcon'],
  title: 'WalletConnect'
}

const walletlink = {
  images: ['CoinBaseIcon'],
  title: 'CoinBase'
}

const authereum = {
  images: ['AuthereumIcon'],
  title: 'Authereum'
}

const torus = {
  images: ['TorusIcon'],
  title: 'Torus'
}

export default {
  injected,
  torus,
  authereum,
  walletlink,
  walletconnect
}
