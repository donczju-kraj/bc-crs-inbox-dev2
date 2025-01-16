const assert = require('assert');
const ganache = require('ganache');
const { Web3 } = require('web3');

// Create an instance of web3 and connect to local test network
const web3 = new Web3(ganache.provider());

beforeEach(() => {
  //  Get list of all accounts
  // on web3 select ethereum network and call getAccounts method
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    })
  // Use one of these accounts to deploy the contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {})
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