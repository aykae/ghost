import { ethers } from "hardhat";

async function deployLock() {
	const currentTimestampInSeconds = Math.round(Date.now() / 1000);
	const unlockTime = currentTimestampInSeconds + 60;

	const lockedAmount = ethers.parseEther("0.001");

	const lock = await ethers.deployContract("Lock", [unlockTime], {
		value: lockedAmount,
	});

	await lock.waitForDeployment();

	console.log(
		`Lock with ${ethers.formatEther(
		lockedAmount
		)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
	);
}

async function deployFactory() {
	const ghostFactory = await ethers.deployContract("GhostFactory");
	await ghostFactory.waitForDeployment();

	console.log(`GhostFactory deployed to: ${ghostFactory.target}`);
	return ghostFactory;
}

async function main() {

	let ghostFactory = await deployFactory();

	let gf = await ethers.getContractAt("GhostFactory", ghostFactory.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
