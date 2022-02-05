const hre = require("hardhat");

async function main() {
  const PolyList = await hre.ethers.getContractFactory("PolyList");
  const polylist = await PolyList.deploy();

  await polylist.deployed();

  console.log("PolyList deployed to:", polylist.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
