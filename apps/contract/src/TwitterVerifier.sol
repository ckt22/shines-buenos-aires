// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {IRiscZeroVerifier} from "risc0/contracts/IRiscZeroVerifier.sol";

contract TwitterEngagementRegistry {
    IRiscZeroVerifier public immutable VERIFIER;
    bytes32 public immutable IMAGE_ID;
    bytes32 public immutable EXPECTED_NOTARY_KEY_FINGERPRINT;
    bytes32 public immutable EXPECTED_EXTRACTION_HASH;
    string public immutable EXPECTED_URL; // Twitter API URL
    
    struct UserEngagement {
        string twitterHandle;
        uint256 followers;
        //uint256 tweets;
        //uint256 likes;
        //uint256 retweets;
        uint256 tlsTimestamp;
        uint256 blockNumber;
        bool verified;
    }
    
    // Mapping: user address => engagement data
    //mapping(address => UserEngagement) public engagements;
    
    // Mapping: twitter handle => user address (for lookup)
    //mapping(string => address) public handleToAddress;
    
    // Array for AI to iterate through all users
    //address[] public verifiedUsers;
    //mapping(address => uint256) private userIndex;
    
    event EngagementVerified(
        //address indexed user,
        string twitterHandle,
        uint256 followers,
        //uint256 tweets,
        uint256 timestamp
    );
    
    constructor(
        address _verifier,
        bytes32 _imageId,
        bytes32 _notaryFingerprint,
        bytes32 _extractionHash,
        string memory _expectedUrl
    ) {
        VERIFIER = IRiscZeroVerifier(_verifier);
        IMAGE_ID = _imageId;
        EXPECTED_NOTARY_KEY_FINGERPRINT = _notaryFingerprint;
        EXPECTED_EXTRACTION_HASH = _extractionHash;
        EXPECTED_URL = _expectedUrl;
    }
    
    function submitEngagement(
        bytes calldata journalData,
        bytes calldata seal
    ) external {
        // Decode journal data with your specific extraction fields
        (
            bytes32 notaryKeyFingerprint,
            string memory method,
            string memory url,
            uint256 tlsTimestamp,
            bytes32 extractionHash,
            string memory twitterHandle,
            //uint256 followers,
            //uint256 tweets,
            //uint256 likes,
            //uint256 retweets
        ) = abi.decode(
            journalData,
            (bytes32, string, string, uint256, bytes32, string/*, uint256, uint256, uint256, uint256*/)
        );
        
        // Security validations
        require(notaryKeyFingerprint == EXPECTED_NOTARY_KEY_FINGERPRINT, "Invalid notary");
        require(extractionHash == EXPECTED_EXTRACTION_HASH, "Invalid extraction");
        require(keccak256(bytes(url)) == keccak256(bytes(EXPECTED_URL)), "Invalid URL");
        
        // Verify ZK proof
        VERIFIER.verify(seal, IMAGE_ID, sha256(journalData));
        
        // Store engagement data
        /*UserEngagement memory engagement = UserEngagement({
            twitterHandle: twitterHandle,
            //followers: followers,
            //tweets: tweets,
            //likes: likes,
            //retweets: retweets,
            tlsTimestamp: tlsTimestamp,
            blockNumber: block.number,
            verified: true
        });*/
        
        // Update mappings
        //engagements[msg.sender] = engagement;
        //handleToAddress[twitterHandle] = msg.sender;
        
        // Add to verified users array if first time
        /*if (userIndex[msg.sender] == 0 && verifiedUsers.length > 0) {
            verifiedUsers.push(msg.sender);
            userIndex[msg.sender] = verifiedUsers.length;
        } else if (verifiedUsers.length == 0) {
            verifiedUsers.push(msg.sender);
            userIndex[msg.sender] = 1;
        }*/
        
        /*emit EngagementVerified(
            msg.sender,
            twitterHandle,
            followers,
            tweets,
            tlsTimestamp
        );*/
    }
    
    // ============ AI-Friendly Read Functions ============
    
    /*function getUserEngagement(address user) 
        external 
        view 
        returns (UserEngagement memory) 
    {
        require(engagements[user].verified, "User not verified");
        return engagements[user];
    }
    
    function getUserByHandle(string memory handle) 
        external 
        view 
        returns (address) 
    {
        return handleToAddress[handle];
    }
    
    function getTotalVerifiedUsers() external view returns (uint256) {
        return verifiedUsers.length;
    }
    
    function getAllVerifiedUsers() external view returns (address[] memory) {
        return verifiedUsers;
    }
    
    // Batch read for AI efficiency
    function getBatchEngagements(uint256 startIdx, uint256 count) 
        external 
        view 
        returns (UserEngagement[] memory, address[] memory) 
    {
        require(startIdx < verifiedUsers.length, "Invalid start index");
        
        uint256 endIdx = startIdx + count;
        if (endIdx > verifiedUsers.length) {
            endIdx = verifiedUsers.length;
        }
        
        uint256 batchSize = endIdx - startIdx;
        UserEngagement[] memory batch = new UserEngagement[](batchSize);
        address[] memory addresses = new address[](batchSize);
        
        for (uint256 i = 0; i < batchSize; i++) {
            address user = verifiedUsers[startIdx + i];
            batch[i] = engagements[user];
            addresses[i] = user;
        }
        
        return (batch, addresses);
    }
    
    // Query users by engagement criteria
    function getUsersWithMinFollowers(uint256 minFollowers) 
        external 
        view 
        returns (address[] memory) 
    {
        uint256 count = 0;
        
        // First pass: count matches
        for (uint256 i = 0; i < verifiedUsers.length; i++) {
            if (engagements[verifiedUsers[i]].followers >= minFollowers) {
                count++;
            }
        }
        
        // Second pass: populate array
        address[] memory matches = new address[](count);
        uint256 idx = 0;
        for (uint256 i = 0; i < verifiedUsers.length; i++) {
            if (engagements[verifiedUsers[i]].followers >= minFollowers) {
                matches[idx] = verifiedUsers[i];
                idx++;
            }
        }
        
        return matches;
    }
    
    // Calculate engagement score (for AI analysis)
    function getEngagementScore(address user) 
        external 
        view 
        returns (uint256) 
    {
        UserEngagement memory eng = engagements[user];
        require(eng.verified, "User not verified");
        
        // Weighted score: followers * 1 + tweets * 2 + likes * 0.5 + retweets * 3
        return eng.followers + (eng.tweets * 2) + (eng.likes / 2) + (eng.retweets * 3);
    }*/
}