// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract GhostPolicy {

    address public factory;
    address public creator;
    uint public fee;

    uint public poolTotal;
    uint public health;

    uint public numClaims;
    uint public totalClaimFunds;
    uint public premiumFactor;
    uint public amountPaidFactor;

    struct Policyholder {
        bool isActive;

        uint premium;

        uint premiumTime;

        uint amountPaid;

        uint balance;

        uint riskScore;

        //TODO:
        //chainlinkFunction trigger;
    }

    uint numPolicyholders;

    mapping (address => Policyholder) public policyholders;
    mapping (address => address) public dependents; 

    event PremiumPaid(address pholder, uint amount);
    event ClaimCollected(address pholder, uint amount);

    constructor() {
        factory = msg.sender;
    }

    function initialize(address _creator) external {
        require(msg.sender == factory, "Policy already initialized");
        creator = _creator;
        //TODO: add fee init
    }

    function getHealth() external view returns (uint) {
        return health;
    }

    function joinPolicy() external payable {
        //TODO:
        // create Policyholder
        // add dependents
        // make first payment
        // set timer for next month
    }

    function payPremium() external payable {
        require(msg.value > 0, "Premium must be greater than 0");
        require(policyholders[msg.sender].balance > 0, "Policyholder must have a balance");
        require(msg.value <= policyholders[msg.sender].balance, "Premium must be less than or equal to policyholder balance");

        getBalance(); //

        policyholders[msg.sender].amountPaid += msg.value;
        policyholders[msg.sender].balance -= msg.value;

        //TODO: Fix Fee Calculation (decimals)
        poolTotal += msg.value * (1 - fee);
        payable(creator).transfer(msg.value * fee);

        //TODO: adjust pool health

    }

    function getBalance() public returns (uint) {
        require(policyholders[msg.sender].balance > 0 || policyholders[msg.sender].amountPaid > 0, "Sender is not a policyholder");

        if (block.timestamp > policyholders[msg.sender].premiumTime) {
            // set next payment time to next month and update balance
            policyholders[msg.sender].premiumTime = block.timestamp + (30 * 24 * 60 * 60); 
            policyholders[msg.sender].balance += policyholders[msg.sender].premium;
        }

        //TODO: add account abstraction here and elsewhere
        return policyholders[msg.sender].balance;
    }

    function collectClaim() external payable {
        require(policyholders[msg.sender].balance == 0, "Claim funds are witheld until outstanding premium balance is paid");
        //require(pholderTriggers[msg.sender] == 1, "Policy event has not yet triggered")

        require((policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor) <= poolTotal, "Insufficient funds in policy to pay claim");
        payable(msg.sender).transfer((policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor));
        totalClaimFunds += (policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor);
        numClaims++;
        numPolicyholders--;

        //TODO: adjust pool health

        //TODO: Remove policyholder from policy
        policyholders[msg.sender].isActive = false;
        //policyholders[msg.sender] = ;    
    }

}