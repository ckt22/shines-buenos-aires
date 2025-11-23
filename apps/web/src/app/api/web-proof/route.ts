import { NextResponse } from "next/server";

// In-memory storage for demo purposes
const verificationData = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log("Vouch web-proof webhook received:", payload);

    // Extract data from vouch webhook
    const requestId = payload.requestId;
    const webProof = payload.webProofs?.[0]?.presentationJson;

    if (!webProof) {
      return NextResponse.json(
        { error: "No web proof found" },
        { status: 400 }
      );
    }

    // Store verification data
    verificationData.set(requestId, {
      status: "completed",
      webProof: webProof,
      timestamp: new Date().toISOString(),
    });

    console.log(`Verification completed for requestId: ${requestId}`);

    // TODO: Trigger ZK compression when ready
    // await compressAndSubmitToCelo(requestId, webProof);

    return NextResponse.json({
      success: true,
      message: "Verification processed successfully",
    });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

// Export helper to get verification data
export function getVerificationData(requestId: string) {
  return verificationData.get(requestId);
}
