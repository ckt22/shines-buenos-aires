import { NextRequest, NextResponse } from "next/server";

// Import the verification data from webhook
// Note: In production, use a shared database instead of in-memory storage
const verificationData = new Map<string, any>();

// Mark this route as dynamic
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const requestId = searchParams.get("requestId");

    if (!requestId) {
      return NextResponse.json(
        { error: "Request ID is required" },
        { status: 400 }
      );
    }

    // Check if verification data exists
    // In production, query from database
    const storedRequestId = localStorage?.getItem?.("twitterVerificationId");
    
    // For now, simulate checking - webhook will update this
    // You would query your database here in production
    const data = verificationData.get(requestId);

    if (data?.status === "completed") {
      return NextResponse.json({
        status: "completed",
        message: "Verification successful",
        data: data,
      });
    }

    // Still pending
    return NextResponse.json({
      status: "pending",
      message: "Verification in progress",
    });
  } catch (error) {
    console.error("Error checking verification status:", error);
    return NextResponse.json(
      { error: "Failed to check status" },
      { status: 500 }
    );
  }
}
