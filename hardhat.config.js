require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;
const NETWORK_API_URL = process.env.NETWORK_API_URL;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const GAS_PRICE = process.env.GAS_PRICE * Math.pow(10,9);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
if (NETWORK_API_URL != undefined && ACCOUNT_PRIVATE_KEY != undefined && ETHERSCAN_API_KEY != undefined) {
  module.exports = {
    solidity: {
      version: '0.8.0',
    },
    
    etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: ETHERSCAN_API_KEY
    },

    networks: {
      ropsten: {
        gasPrice: GAS_PRICE,
        url: NETWORK_API_URL,
        accounts: [ACCOUNT_PRIVATE_KEY],
      },

      mainnet: {
        gasPrice: GAS_PRICE,
        url: NETWORK_API_URL,
        accounts: [ACCOUNT_PRIVATE_KEY],
      },
    },
  };
}
