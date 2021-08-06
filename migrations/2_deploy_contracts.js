var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Ballot = artifacts.require("./Ballot.sol");

module.exports = function (deployer) {
    // Simple Storage
    deployer.deploy(SimpleStorage);

    // Ballot
    var args = ["Proposal 1", "Proposal 2", "Proposal 3"].map((x) =>
        web3.utils.asciiToHex(x)
    );
    deployer.deploy(Ballot, args);
};
