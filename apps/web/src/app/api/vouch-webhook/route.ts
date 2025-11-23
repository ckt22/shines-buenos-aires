import { NextResponse } from "next/server";

// In-memory storage for demo purposes
const verificationData = new Map<string, any>();

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log("Vouch webhook received:", payload);

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

// TODO: Implement when Prisma is configured
// import { prisma } from "@/lib/prisma";
// async function compressAndSubmitToCelo(requestId: string, webProof: any) {
//   const zkResponse = await fetch(
//     "https://zk-prover.vlayer.xyz/api/v0/compress-web-proof",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "x-client-id": process.env.WEB_PROVER_API_CLIENT_ID!,
//         Authorization: `Bearer ${process.env.WEB_PROVER_API_SECRET}`,
//       },
//       body: JSON.stringify({
//         presentation: webProof,
//         extraction: {
//           "response.body": {
//             jmespath: [
//               "data.user.legacy.screen_name",
//               "data.user.legacy.followers_count",
//               "data.user.legacy.statuses_count",
//               "data.user.legacy.favourites_count",
//               "data.user.legacy.media_count",
//             ],
//           },
//         },
//       }),
//     }
//   );
//   const { data } = await zkResponse.json();
//   await prisma.webProof.update({
//     where: { requestId },
//     data: {
//       zkProof: data.zkProof,
//       journalDataAbi: data.journalDataAbi,
//       status: "ready_for_submission",
//     },
//   });
// }
