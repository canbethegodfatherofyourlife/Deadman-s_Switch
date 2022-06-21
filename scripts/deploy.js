const { ethers } = require("hardhat")

async function main() {
  const deadman = await ethers.getContractFactory("Deadman")
  console.log("Deploying Contract...")

  const dead = await deadman.deploy()
  console.log("Contract deployed to address:", dead.address);
  await dead.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
