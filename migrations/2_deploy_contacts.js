var MladToken = artifacts.require("./MladToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MladToken);
};