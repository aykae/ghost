// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

// Deploy on Fuji

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";

contract GhostClaimVerifier is FunctionsClient {
    using FunctionsRequest for FunctionsRequest.Request;

    // State variables to store the last request ID, response, and error
    bytes32 public lastRequestId;
    bytes public lastResponse;
    bytes public lastError;

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        bytes response;
        bytes err;
    }
    mapping(bytes32 => RequestStatus) public requests; /* requestId --> requestStatus */          
    bytes32[] public requestIds;

    // Event to log responses
    event Response(
        bytes32 indexed requestId,
        string temperature,
        bytes response,
        bytes err
    );

    address router = 0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0;
    bytes32 donID =
        0x66756e2d6176616c616e6368652d66756a692d31000000000000000000000000;

    uint32 gasLimit = 300000;
    uint64 public subscriptionId;

    // JavaScript source code
    string public source =
        "const firstName = args[0];"
        "const lastName = args[1];"
        "const apiResponse = await Functions.makeHttpRequest({"
        "url: `https://65d99e68bcc50200fcdbd504.mockapi.io/api/v1/lives?firstName=${firstName}&lastName=${lastName}`,"
        "responseType: 'text'"
        "});"
        "if (apiResponse.error) {"
        "throw Error('Request failed');"
        "}"
        "const { data } = apiResponse;"
        "return Functions.encodeString(data);";

    string public lastFirstName;    
    string public lastLastName;    
    bool public lastIsDeceased;
    address public lastSender;

    struct LifeStruct {
        address sender;
        uint timestamp;
        string firstName;
        string lastName;
        bool isDeceased;
    }
    LifeStruct[] public lives;
    mapping(string => uint256) public lifeIndex;
    mapping(bytes32 => string) public requestTolife;

    constructor(uint64 functionsSubscriptionId) FunctionsClient(router) {
        subscriptionId = functionsSubscriptionId;      
    }

    function getDeceasedStatus(
        string memory _firstName,
        string memory _lastName
    ) external returns (bytes32 requestId) {

        string[] memory args = new string[](2);
        args[0] = _firstName;
        args[1] = _lastName;

        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source); // Initialize the request with JS code
        if (args.length > 0) req.setArgs(args); // Set the arguments for the request

        // Send the request and store the request ID
        lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );
        lastFirstName = _firstName;
        lastLastName = _lastName;
        string nameId = string(abi.encodePacked(_firstName, _lastName));
        requestToLife[lastRequestId] = nameId;

        LifeStruct memory auxLifeStruct = LifeStruct({
            sender: msg.sender,
            timestamp: 0,
            firstName: _firstName,
            lastName: _lastName,
            isDeceased: false,
            temperature: ""            
        });
        lives.push(auxLifeStruct);
        lifeIndex[nameId] = lives.length-1;

        requests[lastRequestId] = RequestStatus({
            exists: true,
            fulfilled: false,
            response: "",
            err: ""
        });
        requestIds.push(lastRequestId);

        return lastRequestId;
    }

    // Receive the living status requested
    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        require(requests[requestId].exists, "request not found");

        lastError = err;
        lastResponse = response;

        requests[requestId].fulfilled = true;
        requests[requestId].response = response;
        requests[requestId].err = err;

        string memory auxLife = requestToLife[requestId];
        lastIsDeceased = string(response);
        lives[lifeIndex[auxLife]].isDeceased = lastIsDeceased;
        lives[lifeIndex[auxLife]].timestamp = block.timestamp;

        // Emit an event to log the response
        emit Response(requestId, lastIsDeceased, lastResponse, lastError);
    }

    function getLife(string memory firstName, string memory lastName) public view returns (LifeStruct memory) {
        return lives[lifeIndex[string(abi.encodePacked(firstName, lastName))]];
    }

    function listAllLives() public view returns (LifeStruct[] memory) {
        return lives;
    }

    function listLives(uint start, uint end) public view returns (LifeStruct[] memory) {
        if (end > lives.length)
            end = lives.length-1;
        require (start <= end, "start must <= end");
        uint lifeCount = end - start + 1;
        LifeStruct[] memory livesAux = new LifeStruct[](lifeCount);

        for (uint i = start; i < (end + 1); i++) {
            livesAux[i-start] = lives[i];
        }
        return livesAux;
    }

}