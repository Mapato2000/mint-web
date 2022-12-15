let contracts = null;
try {
  contracts = require('../contracts.json');
} catch (e) {
  console.log('-----------------------------------------------------------------------------------');
  console.log('The contracts are not compiled! Run "truffle compile" in Smart Contracts directory!');
  console.log('-----------------------------------------------------------------------------------');
}
module.exports={
  URL_BASE: 'http://localhost:8080/#',
  URL_NODE: "https://node-teranyina.centreeasy.com",

  exopass: {
    address: contracts?.exopass?.address,
    abi: contracts?.exopass?.abi
  },
  humans: {
    address: contracts?.humans?.address,
    abi: contracts?.humans?.abi
  }
}
