"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export function VerifyTwitter() {
  const [isLoading, setIsLoading] = useState(false);

  const startVerification = async () => {
    console.log("Starting verification...");

    try {
      setIsLoading(true);

      // Generate unique request ID
      const requestId = crypto.randomUUID();
      console.log("Generated requestId:", requestId);

      // Store requestId for later retrieval
      localStorage.setItem("twitterVerificationId", requestId);

      // Get environment variables
      const datasourceId = process.env.NEXT_PUBLIC_VOUCH_DATASOURCE_ID;
      const customerId = process.env.NEXT_PUBLIC_VOUCH_CUSTOMER_ID;

      if (!datasourceId || !customerId) {
        alert(
          "Vouch credentials not configured. Please set NEXT_PUBLIC_VOUCH_DATASOURCE_ID and NEXT_PUBLIC_VOUCH_CUSTOMER_ID in your .env.local file."
        );
        setIsLoading(false);
        return;
      }

      const webhookBaseUrl =
        process.env.NEXT_PUBLIC_WEBHOOK_URL || window.location.origin;

      // Construct Vouch URL manually
      const params = new URLSearchParams({
        requestId: requestId,
        datasourceId: datasourceId,
        customerId: customerId,
        redirectBackUrl: `${window.location.origin}/callback?requestId=${requestId}`,
        webhookUrl: `${webhookBaseUrl}/api/vouch-webhook`,
      });

      const verificationUrl = `https://app.getvouch.io/verify?${params.toString()}`;
      console.log("Redirecting to:", verificationUrl);

      window.location.href = verificationUrl;
    } catch (error) {
      console.error("Failed to start verification:", error);
      alert(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={startVerification}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Sparkles className="w-5 h-5" />
      {isLoading ? "Starting Verification..." : "Verify Twitter Engagement"}
    </button>
  );
}
