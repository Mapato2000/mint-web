let PrivateKeyProvider = require("@truffle/hdwallet-provider");
const Constant = require('../Client/constants');
const Config = require('../Server/config/config');

module.exports = {
    compilers: {
        solc: {
            version: "^0.8.0",
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: 5777,
            gas: 6721975,
            gasPrice: 0
        },
        alastria: {
            name: 'alastria',
            seed: "servicechain cobi2020 telsius",
            gasPrice: 0,
            host: "http://n1.rabbit.centreeasy.com/rpc"
        },
        substrate: {
            provider: new PrivateKeyProvider(Config.pk, Constant.URL_NODE),
            network_id: 1714,
            gas: 80000000,
            gasPrice: 0
        },
        ropsten: {
            provider: new PrivateKeyProvider(Config.pk, Config.infuraEndPoint),
            network_id: 3,
            gas: 7999990,
            gasPrice: 10000000000,
            networkCheckTimeout: 1000000000
        }
    }
};
