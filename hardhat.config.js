const fs = require('fs');

require('dotenv').config();
require('solidity-coverage');
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");

const TESTNET_GAS_MULT = 1.3;

const mnemonic = fs.readFileSync('.testnet.seed-phrase').toString().trim();
if (!mnemonic || mnemonic.split(' ').length !== 12) {
  console.log('unable to retrieve mnemonic from .secret');
}

const gasPriceTestnetRaw = fs
  .readFileSync('.minimum-gas-price-testnet.json')
  .toString()
  .trim();
const minimumGasPriceTestnet = parseInt(
  JSON.parse(gasPriceTestnetRaw).result.minimumGasPrice,
  16,
);
if (
  typeof minimumGasPriceTestnet !== 'number' ||
  Number.isNaN(minimumGasPriceTestnet)
) {
  throw new Error(
    'unable to retrieve network gas price from .gas-price-testnet.json',
  );
}
console.log(`Minimum gas price Testnet: ${minimumGasPriceTestnet}`);
const { API_URL, PRIVATE_KEY } = process.env;
let PK = PRIVATE_KEY;

if(!PK) {
  PK = '4cc8dd2a1774092e51f448fc5f2870ac500475b4fa5e52e2401c733f4d468009';
}

console.log(`Private Key found ${PRIVATE_KEY} `);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {

    rsktestnet: {
      chainId: 31,
      url: 'https://public-node.testnet.rsk.co', 
      gasPrice: Math.floor(minimumGasPriceTestnet * TESTNET_GAS_MULT),
      gasMultiplier: TESTNET_GAS_MULT,
      accounts: [`0x${PK}`],
      timeout: 20000000,
    },
    hardhat: {},
  },
  mocha: {
    timeout: 6000000,
  },
};
