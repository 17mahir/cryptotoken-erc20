var MladToken = artifacts.require("./MladToken.sol");

contract('MladToken', function(accounts) {
  var tokenInstance;
  it('allocates the initial supply upon deployment', function() {
    return MladToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
    });
});
})