// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './GhostPolicy.sol';

contract GhostFactory {

    mapping(address => address) public policyMap;
    address[] public policies;

    event PolicyCreated(address policyAddress, address creator);

    function createPolicy(address _creator) external returns (address newPolicy) {

        require(policyMap[_creator] == address(0), "Policy already exists");

        //Deterministic policy address creation
        bytes memory bytecode = type(GhostPolicy).creationCode;
        bytes32 salt = keccak256(abi.encodePacked(_creator));
        assembly {
            newPolicy := create2(0, add(bytecode, 32), mload(bytecode), salt)
        }

        GhostPolicy(newPolicy).initialize(_creator);

        policyMap[_creator] = newPolicy;
        policies.push(newPolicy);

        emit PolicyCreated(newPolicy, _creator);
    }

}