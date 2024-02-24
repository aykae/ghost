// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import './GhostClaimVerifier.sol';

contract GhostPolicy {

    address public factory;
    address public creator;
    uint public fee;
    uint public minPremium; //TODO: should premiums be global or per policyholder
    uint public maxPremium; //TODO: should premiums be global or per policyholder

    uint public poolTotal;
    uint public health;

    uint public numClaims;
    uint public totalClaimFunds;
    uint public premiumFactor;
    uint public amountPaidFactor;

    struct Policyholder {

        string firstName;

        string lastName;

        bool isActive;

        uint premium;

        uint premiumTime;

        uint amountPaid;

        uint balance;

        uint riskScore;

        address dependent;

    }

    uint numPolicyholders;

    mapping (address => Policyholder) public policyholders;
    mapping (address => address) public dependents; 

    event PremiumPaid(address pholder, uint amount);
    event ClaimCollected(address pholder, uint amount);

    constructor() {
        factory = msg.sender;
    }

    function initialize(address _creator, uint _fee, uint _minPremium, uint _maxPremium) external {
        require(msg.sender == factory, "Policy already initialized");
        creator = _creator;
        fee = _fee;
        minPremium = _minPremium;
        maxPremium = _maxPremium;
    }

    function getPolicyData() external view returns (address, uint, uint, uint, uint, uint, uint, uint, uint, uint, uint) {
        return (creator, fee, minPremium, maxPremium, poolTotal, health, numClaims, totalClaimFunds, premiumFactor, amountPaidFactor, numPolicyholders);
    }

    function getHealth() external view returns (uint) {
        return health;
    }

    function joinPolicy(string memory _firstName, string memory _lastName, address _dependent, uint _premium) external payable {

        require(policyholders[msg.sender].isActive == false, "Policyholder already exists");
        require(msg.value >= minPremium, "Premium payment must be greater than minimum premium");
        require(msg.value <= maxPremium, "Premium payment must be less than minimum premium");
        require(msg.value == _premium, "Premium payment must be equal to premium");

        policyholders[msg.sender].firstName = _firstName;
        policyholders[msg.sender].lastName = _lastName;
        policyholders[msg.sender].dependent = _dependent;
        policyholders[msg.sender].isActive = true;
        policyholders[msg.sender].premium = _premium;
        policyholders[msg.sender].premiumTime = block.timestamp + (30 * 24 * 60 * 60);
        policyholders[msg.sender].balance = 0;
        policyholders[msg.sender].riskScore = 0;

        numPolicyholders++;
    }

    function payPremium() external payable {
        require(msg.value > 0, "Premium must be greater than 0");
        require(policyholders[msg.sender].balance > 0, "Policyholder must have a balance");
        require(msg.value <= policyholders[msg.sender].balance, "Premium must be less than or equal to policyholder balance");

        getBalance();

        policyholders[msg.sender].amountPaid += msg.value;
        policyholders[msg.sender].balance -= msg.value;

        poolTotal += msg.value * (1 - fee);
        payable(creator).transfer(msg.value * fee);

    }

    function getBalance() public returns (uint) {
        require(policyholders[msg.sender].balance > 0 || policyholders[msg.sender].amountPaid > 0, "Sender is not a policyholder");

        if (block.timestamp > policyholders[msg.sender].premiumTime) {
            // set next payment time to next month and update balance
            policyholders[msg.sender].premiumTime = block.timestamp + (30 * 24 * 60 * 60); 
            policyholders[msg.sender].balance += policyholders[msg.sender].premium;
        }

        return policyholders[msg.sender].balance;
    }

    struct LifeStruct {
        address sender;
        uint timestamp;
        string firstName;
        string lastName;
        bool isDeceased;
    }

    function collectClaim() external payable {
        require(policyholders[msg.sender].balance == 0, "Claim funds are witheld until outstanding premium balance is paid");
        //require(pholderTriggers[msg.sender] == 1, "Policy event has not yet triggered")

        //Verify claim is valid
        GhostClaimVerifier gcv = new GhostClaimVerifier('0xbaB1602a8dF347C2B9dEC1753196168B98533543');
        gcv.getDeceasedStatus(policyholders[msg.sender].firstName, policyholders[msg.sender].lastName);
        LifeStruct memory life = gcv.getLife(policyholders[msg.sender].firstName, policyholders[msg.sender].lastName);
        require(life.isDeceased, "Policyholder is not deceased");

        require((policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor) <= poolTotal, "Insufficient funds in policy to pay claim");
        payable(msg.sender).transfer((policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor));
        totalClaimFunds += (policyholders[msg.sender].premium * premiumFactor) + (policyholders[msg.sender].amountPaid * amountPaidFactor);
        numClaims++;
        numPolicyholders--;


        policyholders[msg.sender].isActive = false;
    }

}