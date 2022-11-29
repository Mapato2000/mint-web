let contracts;
try {
    contracts = require('../../contracts.json');
} catch (e) {
    console.log('The contracts file could not be loaded.');
    contracts = {};
}

const configuration = {

    defaultPort: 3002,

    ipfsNode: 'http://localhost:3002',

    // Database
    database: {
        // Localhost
        url: 'mongodb://127.0.0.1:27017/example'
    },

    networks: {
        localhost: {
            name: "localhost",
            seed: "judge two dice smooth trust hospital dismiss buzz pottery shove vote green river brother aerobic",
            host: "http://127.0.0.1:8545",
            gasPrice: 0,
        },
        alastria: {
            name: 'alastria',
            seed: "servicechain cobi2020 telsius",
            gasPrice: 0,
            host: "http://n1.rabbit.centreeasy.com/rpc"
        },
        telsius_test: {
            name: 'alastria',
            seed: "servicechain cobi2020 telsius test",
            gasPrice: 0,
            host: "http://n2.rabbit.centreeasy.com/rpc"
        },
        substrate: {
            network_id: 1714,
            gas: 80000000,
            gasPrice: 0,
            host: "https://node-teranyina.centreeasy.com"
        },
    },

    // Must be GMAIL
    email: {
        user: "Example <example@gmail.com>",
        address: "example@gmail.com",
        password: "XXXXX"
    },
    account: {
        address: '',
        pk: ''
    }
};

// Export configuration
module.exports = configuration;
