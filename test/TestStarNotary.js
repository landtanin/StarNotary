// Importing the StartNotary Smart Contract ABI (JSON representation of the Smart Contract)
// `artifacts` is provided by Truffle. This provides the JSON representation of the contract.
// This is the same as in 2_deploy_contracts.js
const StarNotary = artifacts.require("StarNotary");

let accounts; // List of development accounts provided by Truffle
let owner; // Global variable use it in the tests cases

// This is like calling setUp() or beforeEach()
// This sort of defines your smart contract on the test blockchain network
// This called the StartNotary Smart contract and initialize it
contract('StarNotary', (accs) => {
    accounts = accs; // Assigning test accounts
    owner = accounts[0]; // Assigning the owner test account
});

// Example test case, it will test if the contract is able to return the starName property 
// initialized in the contract constructor
it('has correct name', async () => {
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    let starName = await instance.starName.call(); // Calling the starName property
    assert.equal(starName, "Awesome Udacity Star"); // Assert if the starName property was initialized correctly
});