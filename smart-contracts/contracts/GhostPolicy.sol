// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract GhostPolicy {

    address public factory;
    address public creator;

    constructor() {
        factory = msg.sender;
    }

    function initialize(address _creator) external {
        require(msg.sender == factory, "Policy already initialized");
        creator = _creator;
    }


}