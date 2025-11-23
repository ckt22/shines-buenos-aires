// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {Script, console} from "forge-std/Script.sol";
import {TwitterEngagementRegistry} from "../src/TwitterVerifier.sol";

contract DeployScript is Script {
    function run() external {
        string memory expectedUrl = vm.envString("EXPECTED_URL");
        
        TwitterEngagementRegistry registry = new TwitterEngagementRegistry(
            0x925d8331ddc0a1F0d96E68CF073DFE1d92b69187,
            0x6a555e28e0d59c20ad0dc76dfa07328f2f68638827dafef87178b306fb02e608,
            0xa7e62d7f17aa7a22c26bdb93b7ce9400e826ffb2c6f54e54d2ded015677499af,
            0x28284d8e84d3ee964984272b12474168ad01603fde43d95932c7cef4f99857ec,
            "https://api.twitter.com/graphql/USER_BY_SCREEN_NAME_QUERY"
        );
        
        console.log("Deployed at:", address(registry));
        console.log("Expected URL:", expectedUrl);
    }
}