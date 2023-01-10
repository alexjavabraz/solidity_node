const { expect } = require("chai");
const { deployContract } = require("./test-util/test-util.js");

describe("TwoWayPeg Token contract", function () {

  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("TwoWayPeg");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const addressFed = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
    hardhatToken = await Token.deploy();
  });

  describe("Deployment TwoWayPeg", function () {
  
    it("Should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should have an address", async function () {
        expect(await hardhatToken.address).is.not.null();
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      await hardhatToken.transfer(addr1.address, 50);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await hardhatToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

 

 
  });
});