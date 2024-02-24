import { ethers } from "hardhat";
import { GhostFactory, GhostFactory__factory } from '../typechain-types';
import ghostFactoryAbi from '../artifacts/contracts/GhostFactory.sol/GhostFactory.json';
import ghostPolicyAbi from '../artifacts/contracts/GhostPolicy.sol/GhostPolicy.json';
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

async function deployPolicy() {
	await deployFactory();

	const [signer] = await ethers.getSigners();

	let gf = new ethers.Contract(GHOST_FACTORY_ADDRESS, ghostFactoryAbi.abi, signer);
	await gf.createPolicy();

}

async function getPolicyData() {
	console.log('MetaMask is not installed, using local network');
	const [signer] = await ethers.getSigners();
	const GHOST_FACTORY_ADDRESS = '0x';

	let gf = new ethers.Contract(GHOST_FACTORY_ADDRESS, ghostFactoryAbi.abi, signer);

	const policyAddy = await gf.getPolicyholderPolicy(signer.getAddress());
	let policy = new ethers.Contract(policyAddy, ghostPolicyAbi.abi, signer);
	const policyData = await policy.getPolicyData();

	console.log(policyData);
}

async function main() {

	// const [signer0, signer1, signer2, signer3] = await ethers.getSigners();
	// const signers = [signer0, signer1, signer2, signer3];
	// let ghostFactory = await deployFactory();

	// for (let i = 0; i < 5; i++) {
	// 	let gf = new ethers.Contract(ghostFactory.target, ghostFactoryAbi.abi, signers[i]);
	// 	await gf.createPolicy();
	// }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
