describe("Network.current()", function() {
  it("defaults network is null", function() {
    expect(PaysharesBase.Network.current()).to.be.null;
  });
});

describe("Network.useTestNetwork()", function() {
  it("switches to the test network", function() {
    PaysharesBase.Network.useTestNetwork();
    expect(PaysharesBase.Network.current().networkPassphrase()).to.equal(PaysharesBase.Networks.TESTNET)
  });
});

describe("Network.usePublicNetwork()", function() {
  it("switches to the public network", function() {
    PaysharesBase.Network.usePublicNetwork();
    expect(PaysharesBase.Network.current().networkPassphrase()).to.equal(PaysharesBase.Networks.PUBLIC)
  });
});
