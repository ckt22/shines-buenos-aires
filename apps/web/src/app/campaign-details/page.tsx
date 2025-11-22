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
      verifiedAudience: "80,000",
      engagementRate: "8%",
      estimatedImpression: "30,000",
      priceRange: "500 - 1000u",
    },
    {
      name: "BlockchainBob",
      platform: "YouTube",
      region: "Europe",
      followers: "89,000",
      niche: "Technical analysis & project reviews",
      verified: true,
      avatar: "👨",
      verifiedAudience: "65,000",
      engagementRate: "12%",
      estimatedImpression: "45,000",
      priceRange: "800 - 1500u",
    },
    {
      name: "Web3Wendy",
      platform: "Instagram",
      region: "Asia Pacific",
      followers: "156,000",
      niche: "Lifestyle & Web3 adoption",
      verified: true,
      avatar: "👩",
      verifiedAudience: "120,000",
      engagementRate: "6%",
      estimatedImpression: "52,000",
      priceRange: "600 - 1200u",
    },
    {
      name: "NFT_Master",
      platform: "TikTok",
      region: "Global",
      followers: "210,000",
      niche: "NFT collections & gaming",
      verified: true,
      avatar: "👨",
      verifiedAudience: "180,000",
      engagementRate: "15%",
      estimatedImpression: "85,000",
      priceRange: "1000 - 2000u",
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
                    <p className="text-gray-600 text-sm mb-3">{kol.niche}</p>
                    
                    {/* Additional Data */}
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Verified Audience Size:</span>
                        <span className="font-semibold text-gray-900">{kol.verifiedAudience} (vlayer)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Engagement Rate:</span>
                        <span className="font-semibold text-gray-900">{kol.engagementRate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Estimated impression:</span>
                        <span className="font-semibold text-gray-900">{kol.estimatedImpression}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price range:</span>
                        <span className="font-semibold text-gray-900">{kol.priceRange}</span>
                      </div>
                    </div>
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
