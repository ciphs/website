/// utility methods
const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
const toEthString = wei => wei / 10**18 + ' ETH';

/// constants
const abi = 'http://api.etherscan.io/api?module=contract&action=getabi&address=0xa4ff5ce0556f9ff0797ae525ec5ba9b723878a3e&format=raw'; 
const targetApi = 'https://mainnet.infura.io/lzmvnv0GkIOUV7jzh3RJ';
const contractAddress = '0xA4FF5CE0556f9fF0797Ae525ec5bA9B723878A3E';

/// getting contract
const web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
const ciphs = web3.eth.contract(abi).at(contractAddress);

/// read and display values
writeValue('contractAddress', contractAddress);
writeValue('getRate', toEthString(ciphs.getRate()));
