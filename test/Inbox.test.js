const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');
// Create an instance of web3 and connect to local test network
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
beforeEach(async () => {
  //  Get list of all accounts
  // on web3 select ethereum network and call getAccounts method
  accounts = await web3.eth.getAccounts();

  // Use one of these accounts to deploy the contract
  // Contract is constructor function to which we pass ABI
  inbox = await new web3. eth.Contract(JSON.parse(interface))
    // deploy contract passing bytecode and initial argument
    .deploy({ data: bytecode, arguments: ['Hello world!']})
    // send function actually deploys the contract to the network
    .send({ from: accounts[0], gas: '1000000' });
    // returned object - 'inbox' represents what exist on the blockchain
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    // ok method checks if the value exists
    // if inbox.options.address is null/undefined, it will fail
    // If contract was deployed, it will have an address
    assert.ok(inbox.options.address);
  })
})
