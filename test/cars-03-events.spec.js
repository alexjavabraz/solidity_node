const { expect } = require("chai");
const { ethers } = require("hardhat");
const { deployContract } = require("./test-util/test-util.js");

describe("Cars - events", () => {
  let accounts;
  let superHonk;
  let cars;

  before(async () => {
    accounts = await ethers.getSigners();
    superHonk = await deployContract("SuperHonk");
    cars = await deployContract("Cars", superHonk.address);

    const tx = await cars.connect(accounts[1]).functions.addCar(
      "0xff00ff", // colour: purple
      4, // doors: 4
      {
        value: ethers.utils.parseEther("1.1"),
      }
    );
  });

  it("should honk", async () => {
    const txToSend = cars.connect(accounts[1]).functions.honk(
      1, // car ID
      false // isLoud
    );
    await expect(txToSend).to.emit(cars, "CarHonk").withArgs(1);
  });

  it("should super honk", async () => {});
});
