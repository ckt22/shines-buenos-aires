"use client";

export default function CampaignsPage() {
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
