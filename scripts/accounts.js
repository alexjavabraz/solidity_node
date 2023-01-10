const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const accounts = await ethers.getSigners();

  let wallet = ethers.Wallet.createRandom();
  let wallet1 = ethers.Wallet.createRandom();
  let addr1 = wallet.address;
  let addr2 = wallet1.address;

  for (const account of accounts) {
    console.log(account.address);
  }

  const lockedAmount = ethers.utils.parseEther("0.0004");

  const twpFactory = await ethers.getContractFactory("TwoWayPeg");
  const addressFed = "0x8ba1f109551bD432803012645Ac136ddd64DBA72";
  console.log(`Address Fed ${addressFed} `);
  const twpContract = await twpFactory.deploy();
  await twpContract.deployed();
  //const twpContract = await ethers.getContractAt("TwoWayPeg", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
  console.log("Contract deployed at address:", twpContract.address);
  console.log('Preparing...');
  // await twpContract.transfer(addr1, 50);
  console.log('Transferring...');
  console.log(twpContract);
  //let balance1 = await twpContract.balanceOf(addr1.address);

  // await twpContract.connect(addr1).transfer(addr2.address, 50);
  //let balance2 = await twpContract.balanceOf(addr2.address);

  //console.log(balance1);
  //console.log(balance2);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});