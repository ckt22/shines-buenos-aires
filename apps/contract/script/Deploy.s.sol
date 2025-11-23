// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {TwitterEngagementRegistry} from "../src/TwitterEngagementRegistry.sol";

contract DeployScript is Script {
    function run() external {
        string memory expectedUrl = vm.envString("EXPECTED_URL");
        
        TwitterEngagementRegistry registry = new TwitterEngagementRegistry(
            VERIFIER_ADDRESS,
            IMAGE_ID,
            NOTARY_FINGERPRINT,
            EXTRACTION_HASH,
            expectedUrl
        );
        
        console.log("Deployed at:", address(registry));
        console.log("Expected URL:", expectedUrl);
    }
}