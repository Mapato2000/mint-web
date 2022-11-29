const migrations = artifacts.require("Migrations");
const fs = require('fs');

const writeToFile = function (migrationsIns = null) {
    const contractsContent = {};

    if (migrationsIns !== null) {
        contractsContent.migrations = {address: migrationsIns.address, abi: migrationsIns.abi};
    }

    fs.writeFileSync("../contracts.json", JSON.stringify(contractsContent));
};

module.exports = function (deployer) {
    writeToFile('');
    let migrationsIns;
    return deployer.deploy(migrations).then(async (instance) => {
        migrationsIns = instance
        writeToFile(migrationsIns);
    });
};
