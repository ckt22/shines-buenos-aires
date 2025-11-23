import { config } from "dotenv";
import { resolve } from "path";

// Load environment variables from .env file
config({ path: resolve(__dirname, "../../.env") });

export async function getGuestId() {
  const clientId = process.env.WEB_PROVER_API_CLIENT_ID;
  const secret = process.env.WEB_PROVER_API_SECRET;

  if (!clientId || !secret) {
    console.error("Missing environment variables:");
    console.error("WEB_PROVER_API_CLIENT_ID:", clientId ? "✓" : "✗");
    console.error("WEB_PROVER_API_SECRET:", secret ? "✓" : "✗");
    throw new Error("Required environment variables not set");
  }

  const response = await fetch("https://zk-prover.vlayer.xyz/api/v0/guest-id", {
    headers: {
      "x-client-id": clientId,
      Authorization: `Bearer ${secret}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", response.status, response.statusText);
    console.error("Response:", errorText);
    throw new Error(`API request failed: ${response.status}`);
  }

  const result = await response.json();
  console.log("Full response:", JSON.stringify(result, null, 2));
  
  if (result.data?.guestId) {
    console.log("\nZK_PROVER_GUEST_ID=" + result.data.guestId);
  } else {
    console.error("No guestId found in response");
  }
}

// Run if called directly
if (require.main === module) {
  getGuestId().catch(console.error);
}
