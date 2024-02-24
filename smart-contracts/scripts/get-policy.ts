
import { ethers } from "hardhat";
import ghostFactoryAbi from '../artifacts/contracts/GhostFactory.sol/GhostFactory.json';
import ghostPolicyAbi from '../artifacts/contracts/GhostPolicy.sol/GhostPolicy.json';

const DEBUG = true;

async function main() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        provider.getSigner()

        const GHOST_FACTORY_ADDRESS = '0x';
		let gf = new ethers.Contract(GHOST_FACTORY_ADDRESS, ghostFactoryAbi.abi, signer);

        const policyAddy = await gf.getPolicyholderPolicy(signer.getAddress());
		let policy = new ethers.Contract(policyAddy, ghostPolicyAbi.abi, signer);
        const policyData = await policy.getPolicyData();

        console.log(policyData);
    }
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});