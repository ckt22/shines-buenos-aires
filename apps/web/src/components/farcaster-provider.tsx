"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";

export function FarcasterProvider({ children }: { children: React.ReactNode }) {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Awaited<typeof sdk.context>>();

  useEffect(() => {
    const load = async () => {
      try {
        // Initialize Farcaster Frame SDK
        setContext(await sdk.context);
        sdk.actions.ready();
        setIsSDKLoaded(true);
      } catch (error) {
        console.error("Failed to load Farcaster SDK:", error);
        // Still render the app even if SDK fails to load
        setIsSDKLoaded(true);
      }
    };

    if (sdk && !isSDKLoaded) {
      load();
    }
  }, [isSDKLoaded]);

  return <>{children}</>;
}

// Hook to use Farcaster context
export function useFarcaster() {
  const [context, setContext] = useState<Awaited<typeof sdk.context>>();

  useEffect(() => {
    const getContext = async () => {
      try {
        const ctx = await sdk.context;
        setContext(ctx);
      } catch (error) {
        console.error("Failed to get Farcaster context:", error);
      }
    };

    getContext();
  }, []);

  return {
    context,
    sdk,
    isReady: !!context,
  };
}
