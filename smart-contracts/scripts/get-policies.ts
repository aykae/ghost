import { ethers } from "hardhat";
import ghostFactoryAbi from '../artifacts/contracts/GhostFactory.sol/GhostFactory.json';

async function main() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const GHOST_FACTORY_ADDRESS = '0x';
		let gf = new ethers.Contract(GHOST_FACTORY_ADDRESS, ghostFactoryAbi.abi, signer);

        const policies = await gf.getPolicies();
    }
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});