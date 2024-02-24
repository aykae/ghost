import { ethers } from "hardhat";
import { GhostFactory, GhostFactory__factory } from '../typechain-types';
import ghostFactoryAbi from '../artifacts/contracts/GhostFactory.sol/GhostFactory.json';
import { Contract } from "ethers";

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
	//const [creator0, creator1] = ethers.getSigners();

	const ghostFactory = await ethers.deployContract("GhostFactory");
	await ghostFactory.waitForDeployment();

	console.log(`GhostFactory deployed to: ${ghostFactory.target}`);
	return ghostFactory;
}

async function main() {

	const [signer0, signer1] = await ethers.getSigners();
	let ghostFactory = await deployFactory();

	let gf = new ethers.Contract(ghostFactory.target, ghostFactoryAbi.abi, signer0);
	await gf.createPolicy();
	const p0 = await gf.getPolicy();
	console.log(p0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
