// import { prisma } from "@/lib/prisma";

// export async function POST(request: Request) {
//   try {
//     const payload = await request.json();

//     // Extract data from vouch webhook
//     const requestId = payload.requestId;
//     const webProof = payload.webProofs?.[0]?.presentationJson;

//     if (!webProof) {
//       return Response.json({ error: "No web proof found" }, { status: 400 });
//     }

//     // Store web proof temporarily
//     await prisma.webProof.create({
//       data: {
//         requestId: requestId,
//         webProofData: webProof,
//         status: "pending_compression",
//       },
//     });

//     // Trigger ZK compression (can be async job)
//     await compressAndSubmitToCelo(requestId, webProof);

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error("Webhook error:", error);
//     return Response.json(
//       { error: "Webhook processing failed" },
//       { status: 500 }
//     );
//   }
// }

// async function compressAndSubmitToCelo(requestId: string, webProof: any) {
//   // Step 1: Compress to ZK proof
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

//   // Step 2: Store ZK proof for user to submit
//   await prisma.webProof.update({
//     where: { requestId },
//     data: {
//       zkProof: data.zkProof,
//       journalDataAbi: data.journalDataAbi,
//       status: "ready_for_submission",
//     },
//   });

//   // Step 3: Notify user that proof is ready
//   // (via websocket, polling, or redirect)
// }
