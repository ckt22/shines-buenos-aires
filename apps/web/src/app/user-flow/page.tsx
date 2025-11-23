"use client";

import { useState, useEffect } from "react";
import { VerifyTwitter } from "@/components/VerifyTwitter";

export default function UserFlow() {
  const [isVerified, setIsVerified] = useState(false);

  // Check if user is already verified
  useEffect(() => {
    const verified = localStorage.getItem("userVerified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  // If already verified, show campaign page
  if (isVerified) {
    return <CampaignPage />;
  }

  // Show verification page
  return <VerificationPage />;
}

// Verification Page (Image 1 & 2)
function VerificationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Benefits Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            🔥 Get More Collabs. Earn More. Grow Faster.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Become part of the fastest-growing KOL campaign network — get
            exclusive project deals, boost your influence, and bring real
            rewards to your followers.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Why Join?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span className="text-lg font-semibold">More Deals</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span className="text-lg font-semibold">
                  Earn with Your Fans
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span className="text-lg font-semibold">
                  Easy Promotion Tools
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-lg font-semibold">
                  Fast One-Time Verification
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Verification Card */}
      <div className="bg-white p-16 text-center mb-12">
        <VerifyTwitter />
      </div>
    </div>
  );
}

// Campaign Page (Image 3)
function CampaignPage() {
  const campaigns = [
    {
      icon: "🔥",
      title: "PancakeSwap Community Giveaway",
      reward: "5,000 USDT",
      description:
        "Join the campaign, complete simple steps, and earn rewards as an early supporter.",
    },
    {
      icon: "🚀",
      title: "Base Onboarding Sprint",
      reward: "3,000 USDC",
      description:
        "Help test Base's new features and complete quick tasks to earn rewards.",
    },
    {
      icon: "🦊",
      title: "MetaMask User Challenge",
      reward: "2,500 USDT",
      description:
        "Try new wallet functions, share feedback, and unlock rewards.",
    },
    {
      icon: "🌊",
      title: "Lido Staking Education Mission",
      reward: "4,000 USDT",
      description:
        "Learn about liquid staking, complete easy tasks, and gain rewards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Campaign page</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {campaign.icon} {campaign.title}
                </h2>
                <p className="text-lg font-semibold text-gray-700">
                  Reward Pool: {campaign.reward}
                </p>
              </div>
              <p className="text-gray-600 mb-6">{campaign.description}</p>
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
