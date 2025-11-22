"use client";

import {
  Sparkles,
  Target,
  MapPin,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Link as LinkIcon,
} from "lucide-react";

export default function CampaignDetailsPage() {
  const kols = [
    {
      name: "CryptoSarah",
      platform: "Twitter",
      region: "North America",
      followers: "125,000",
      niche: "DeFi & NFT education",
      verified: true,
      avatar: "👩",
    },
    {
      name: "BlockchainBob",
      platform: "YouTube",
      region: "Europe",
      followers: "89,000",
      niche: "Technical analysis & project reviews",
      verified: true,
      avatar: "👨",
    },
    {
      name: "Web3Wendy",
      platform: "Instagram",
      region: "Asia Pacific",
      followers: "156,000",
      niche: "Lifestyle & Web3 adoption",
      verified: true,
      avatar: "👩",
    },
    {
      name: "NFT_Master",
      platform: "TikTok",
      region: "Global",
      followers: "210,000",
      niche: "NFT collections & gaming",
      verified: true,
      avatar: "👨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI-Generated Campaign
          </div>
          <h1 className="text-5xl font-bold text-gray-900">PancakeSwap</h1>
          <p className="text-gray-600 text-lg">
            Your personalized Web3 marketing strategy
          </p>
        </div>

        {/* Campaign Details Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Campaign Goal */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Campaign Goal</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Increase user engagement and educate about decentralized finance
              (DeFi) in Argentina
            </p>
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">
                Target Audience
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">Argentina</p>
          </div>
        </div>

        {/* Content Direction */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Content Direction
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Create localized content that explains the benefits of using
            PancakeSwap for trading and liquidity provision. Use social media,
            influencers, and community events to showcase success stories from
            Argentine users and highlight how PancakeSwap empowers them
            financially.
          </p>
        </div>

        {/* Suggested Campaign Message */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Suggested Campaign Message
            </h2>
          </div>
          <div className="bg-white rounded-2xl p-6 mb-3">
            <p className="text-gray-800 leading-relaxed">
              Dive into DeFi with PancakeSwap and stand a chance to WIN
              exclusive NFT rewards! Trade, stake, and earn while experiencing
              the future of finance!
            </p>
          </div>
          <p className="text-orange-600 text-sm flex items-center gap-2">
            <span className="text-lg">ℹ️</span>
            This message will be displayed to users when they visit your
            campaign link
          </p>
        </div>

        {/* Top Verified KOLs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top Verified KOLs for Your Campaign
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {kols.map((kol, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl">
                      {kol.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900">
                        {kol.name}
                      </h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {kol.platform}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {kol.region}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                      <Users className="w-4 h-4" />
                      <span>{kol.followers} followers</span>
                    </div>
                    <p className="text-gray-600 text-sm">{kol.niche}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ready to Launch CTA */}
        <div className="bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 rounded-3xl p-12 text-center text-white shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <LinkIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to Launch?</h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Generate your unique campaign link and start collecting verified
            users with Vlayer ZK technology
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
            Generate Campaign Link
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
