const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('.compile');
require('dotenv').config();

// deploy code will go here
const provider = newHDWalletProvider(
  process.env.MNEMONIC,
  process.env.INFURA_API_KEY
);
const web3 = new Web3(provider);