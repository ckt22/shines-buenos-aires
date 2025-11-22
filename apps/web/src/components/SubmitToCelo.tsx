// app/components/SubmitToCelo.tsx
"use client";

import { useWalletClient, usePublicClient } from "wagmi";
import { parseAbi } from "viem";

// const CONTRACT_ABI = parseAbi([
//   "function submitEngagement(bytes calldata journalData, bytes calldata seal) external",
//   "function getUserEngagement(address user) external view returns (tuple(string twitterHandle, uint256 followers, uint256 tweets, uint256 likes, uint256 retweets, uint256 tlsTimestamp, uint256 blockNumber, bool verified))",
// ]);

export function SubmitToCelo({ requestId }: { requestId: string }) {
  //   const { data: walletClient } = useWalletClient();
  //   const publicClient = usePublicClient();

  const submitProof = async () => {
    //     // Fetch ZK proof from your database
    //     const response = await fetch(`/api/proofs/${requestId}`);
    //     const { zkProof, journalDataAbi } = await response.json();
    //     // Submit to Celo contract
    //     const hash = await walletClient?.writeContract({
    //       address: process.env.NEXT_PUBLIC_CELO_CONTRACT_ADDRESS as `0x${string}`,
    //       abi: CONTRACT_ABI,
    //       functionName: "submitEngagement",
    //       args: [journalDataAbi, zkProof],
    //     });
    //     // Wait for confirmation
    //     const receipt = await publicClient?.waitForTransactionReceipt({ hash });
    //     if (receipt?.status === "success") {
    //       console.log("Successfully submitted to Celo!");
    //       // Verify it's on-chain
    //       const engagement = await publicClient?.readContract({
    //         address: process.env.NEXT_PUBLIC_CELO_CONTRACT_ADDRESS as `0x${string}`,
    //         abi: CONTRACT_ABI,
    //         functionName: "getUserEngagement",
    //         args: [walletClient.account.address],
    //       });
    //       console.log("On-chain engagement:", engagement);
  };
  //   };

  return <button onClick={submitProof}>Submit to Celo</button>;
}
