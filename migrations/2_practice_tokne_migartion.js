const PracticeToken = artifacts.require("./PracticeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(PracticeToken);
};
