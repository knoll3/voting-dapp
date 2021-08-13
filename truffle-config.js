const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");

const { projectId, mnemonic } = JSON.parse(fs.readFileSync(".secrets.json"));

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    contracts_build_directory: path.join(__dirname, "client/src/contracts"),
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
        },
        develop: {
            port: 8545,
        },
        ropsten: {
            provider: function () {
                return new HDWalletProvider(
                    mnemonic,
                    `https://ropsten.infura.io/v3/${projectId}`
                );
            },
            network_id: 3,
            gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
        },
    },
};
