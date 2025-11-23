"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { VerifyTwitter } from "@/components/VerifyTwitter";

export default function UserFlow() {
  const router = useRouter();

  // Check if user is already verified
  useEffect(() => {
    const verified = localStorage.getItem("userVerified");
    if (verified === "true") {
      // Redirect to campaigns page
      router.push("/campaigns");
    }
  }, [router]);

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
