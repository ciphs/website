/// utility methods
const writeValue = (elementId, value) => document.getElementById(elementId).textContent = value;
const toEthString = wei => wei / 10**18 + ' ETH';

/// constants
const abi = 'https://gist.github.com/nidscom/22fb2a4ff20cd6b30855c717b9296cd5'; 
const targetApi = 'https://mainnet.infura.io/lzmvnv0GkIOUV7jzh3RJ';
const contractAddress = '0xA4FF5CE0556f9fF0797Ae525ec5bA9B723878A3E';

/// getting contract
const web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
const ciphs = web3.eth.contract(abi).at(contractAddress);

/// read and display values
writeValue('contractAddress', contractAddress);
writeValue('getRate', toEthString(ciphs.getRate()));
