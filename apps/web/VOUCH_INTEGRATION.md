# Vouch SDK Integration Guide

This guide explains how to use the Vouch SDK for Twitter verification with ZK proofs.

## Overview

The integration allows users to verify their Twitter engagement data using Vouch's ZK proof technology. The flow is:

1. User clicks "Verify Twitter Engagement"
2. Redirected to Vouch for authentication
3. Vouch sends verification data to webhook
4. User redirected back to callback page
5. ZK proof ready for on-chain submission

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

This will install `@getvouch/sdk` along with other dependencies.

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your Vouch credentials:

```bash
NEXT_PUBLIC_VOUCH_DATASOURCE_ID=your_twitter_datasource_id
NEXT_PUBLIC_VOUCH_CUSTOMER_ID=your_vouch_customer_id
NEXT_PUBLIC_WEBHOOK_URL=https://your-domain.com
```

Get these values from your [Vouch Dashboard](https://getvouch.io).

### 3. Set Up Webhook

Your webhook endpoint is already configured at `/api/vouch-webhook`. Make sure to:

1. Deploy your app to get a public URL
2. Add the webhook URL in your Vouch dashboard: `https://your-domain.com/api/vouch-webhook`
3. Vouch will send POST requests here when verification completes

## Components

### VerifyTwitter Component

Located at `src/components/VerifyTwitter.tsx`

```tsx
import { VerifyTwitter } from "@/components/VerifyTwitter";

// Use in your page
<VerifyTwitter />
```

This component:
- Initializes Vouch SDK
- Generates unique request ID
- Redirects user to Vouch verification flow
- Stores request ID in localStorage for tracking

### Callback Page

Located at `src/app/callback/page.tsx`

Handles the redirect after Vouch verification:
- Polls verification status
- Shows loading/success/error states
- Auto-redirects to user flow on success

## API Routes

### `/api/vouch-webhook` (POST)

Receives verification data from Vouch:
- Extracts web proof from payload
- Stores verification data (in-memory for now)
- Returns success response

**Payload structure:**
```json
{
  "requestId": "uuid",
  "webProofs": [{
    "presentationJson": "..."
  }]
}
```

### `/api/verification-status` (GET)

Checks verification status:
- Query param: `requestId`
- Returns: `{ status: "pending" | "completed" | "failed" }`

## Usage Flow

### 1. User Initiates Verification

```tsx
// In your page component
import { VerifyTwitter } from "@/components/VerifyTwitter";

export default function Page() {
  return (
    <div>
      <h1>Verify Your Twitter</h1>
      <VerifyTwitter />
    </div>
  );
}
```

### 2. Vouch Verification

User is redirected to Vouch where they:
- Connect their Twitter account
- Authorize data access
- Vouch generates ZK proof

### 3. Webhook Processing

Vouch sends verification data to your webhook:
```
POST /api/vouch-webhook
{
  "requestId": "...",
  "webProofs": [...]
}
```

### 4. Callback & Status Check

User returns to `/callback?requestId=...`:
- Page polls `/api/verification-status`
- Shows verification result
- Redirects on success

### 5. Submit to Blockchain (TODO)

Once verification is complete, you can:
- Compress web proof to ZK proof using Vlayer
- Submit to Celo smart contract
- Store on-chain verification

## Data Storage

**Current Implementation:**
- In-memory Map for demo purposes
- Data lost on server restart

**Production Recommendation:**
- Use Prisma with PostgreSQL
- Store: requestId, webProof, zkProof, status, timestamp
- Enable persistent verification history

## Next Steps

1. **Install dependencies**: Run `pnpm install`
2. **Get Vouch credentials**: Sign up at [getvouch.io](https://getvouch.io)
3. **Configure environment**: Update `.env.local`
4. **Test locally**: Use ngrok for webhook testing
5. **Deploy**: Push to Vercel or your hosting provider
6. **Add database**: Integrate Prisma for production

## Testing Locally

Use ngrok to expose your local server:

```bash
# Start your dev server
pnpm dev

# In another terminal
ngrok http 3000

# Use the ngrok URL in Vouch dashboard
# Example: https://abc123.ngrok.io/api/vouch-webhook
```

## Troubleshooting

### Webhook not receiving data
- Check Vouch dashboard webhook configuration
- Verify webhook URL is publicly accessible
- Check server logs for errors

### Verification stuck on pending
- Check webhook received the data
- Verify requestId matches
- Check browser console for errors

### TypeScript errors
- Run `pnpm install` to install @getvouch/sdk
- Restart TypeScript server in your IDE

## Resources

- [Vouch Documentation](https://docs.getvouch.io)
- [Vouch Dashboard](https://getvouch.io)
- [Vlayer ZK Compression](https://docs.vlayer.xyz)
