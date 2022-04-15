require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/K-F-XKXtwqCTABfGXJY0IKpDER6j7E4L',
      accounts: ['e9b178089792cac1d59bfb761ae1535d1e0e65baa1eaa9dedf61f798b4aaa463']
    }
  }
}