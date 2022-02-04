import Web3 from 'web3/dist/web3.min.js';
import Planetary from './Planetary.json';

let web3 = new Web3('https://rinkeby.infura.io/v3/22ad2d2f1e1940048ecac32e494e02c5');

const contractAddress = "0x03e11079Ca6923dCf98d3d4961f9d8Cd9F8Ec44a";
const contract = new web3.eth.Contract(Planetary.abi, contractAddress);

export { web3, contract, contractAddress };
