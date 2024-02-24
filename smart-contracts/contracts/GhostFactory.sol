// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './GhostPolicy.sol';

contract GhostFactory {

    mapping(address => address) public policyMap;
    mapping(address => address) public policyMap2;
    address[] public policies;
    mapping(address => address) public policyholderMap;

    event PolicyCreated(address policyAddress, address creator);

    function createPolicy() external returns (address newPolicy) {

        //TODO: change based on policy parameters
        require(policyMap[msg.sender] == address(0), "Policy already exists"); 

        //Deterministic policy address creation
        bytes memory bytecode = type(GhostPolicy).creationCode;
        bytes32 salt = keccak256(abi.encodePacked());
        assembly {
            newPolicy := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        GhostPolicy(newPolicy).initialize(msg.sender);

        policyMap[msg.sender] = newPolicy;

        require(policyMap2[newPolicy] == address(0), "Policy already exists"); 
        policyMap2[newPolicy] = address(1);

        policies.push(newPolicy);

        emit PolicyCreated(newPolicy, msg.sender);
    }

    function getPolicy() external view returns (address) {
        return policyMap[msg.sender];
    }

    function setPolicyholderPolicy(address policyholder, address policy) external {
        require(policyholderMap[policyholder] == address(0), "Policyholder already has policy");
        require(policyMap[policy] == address(1), "Policy does not exist");

        policyholderMap[policyholder] = policy;
    }

    function getPolicyholderPolicy(address policyholder) external view returns (address) {
        require(policyholderMap[policyholder] != address(0), "Policyholder does not have policy");

        return policyholderMap[policyholder];
    }

    function removePolicyholderPolicy(address policyholder) external {
        require(policyholderMap[policyholder] != address(0), "Policyholder does not have policy");

        policyholderMap[policyholder] = address(0);
    }

}