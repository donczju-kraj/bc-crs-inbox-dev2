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
  inbox = await new web3. eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello world!']})
    .send({ from: accounts[0], gas: '1000000' });
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  })
})
// class Car {
//   park() {
//     return 'stopped';
//   }

//   drive() {
//     return 'vroom';
//   }
// }

// let car;
// beforeEach(() => car = new Car())

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped');
//   });

//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   });
// })