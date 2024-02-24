// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './GhostPolicy.sol';

contract GhostFactory {

    mapping(address => address) public policyMap;
    address[] public policies;

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
        policies.push(newPolicy);

        emit PolicyCreated(newPolicy, msg.sender);
    }

    function getPolicy() external view returns (address) {
        return policyMap[msg.sender];
    }

}