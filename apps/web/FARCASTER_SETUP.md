# Farcaster Mini App Setup

Your app is now configured as a Farcaster mini app! Follow these steps to complete the setup:

## 1. Install Dependencies

```bash
pnpm install
```

This will install the `@farcaster/frame-sdk` package.

## 2. Update Environment Variables

Add your domain to `.env.local`:

```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 3. Create OG Images

Create the following images in the `public/` directory:

- `og-image.png` (1200x630px) - Main Open Graph image
- `splash.png` (512x512px) - Splash screen for the mini app
- `icon-192.png` (192x192px) - App icon
- `icon-512.png` (512x512px) - App icon

## 4. Update Metadata

Update the URLs in `src/app/layout.tsx` to use your actual domain:

```typescript
'fc:frame:image': `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`,
'fc:frame:button:1:target': `${process.env.NEXT_PUBLIC_APP_URL}/project`,
```

## 5. Deploy Your App

Deploy to a hosting service like Vercel:

```bash
npm run build
```

## 6. Register on Farcaster

1. Go to [Warpcast](https://warpcast.com/)
2. Navigate to the Frame developer tools
3. Submit your app URL for review
4. Once approved, users can access your mini app directly in Warpcast

## Features Enabled

✅ Farcaster Frame SDK integration
✅ Context API for user data
✅ Mini app manifest
✅ Optimized for Warpcast mobile
✅ Deep linking support

## Using Farcaster Context

You can access Farcaster user data in your components:

```typescript
import { useFarcaster } from "@/components/farcaster-provider";

function MyComponent() {
  const { context, isReady } = useFarcaster();

  if (isReady && context?.user) {
    console.log("Farcaster user:", context.user.username);
    console.log("User FID:", context.user.fid);
  }

  return <div>...</div>;
}
```

## Testing

Test your Frame locally:

1. Use the Farcaster Frame validator: https://warpcast.com/~/developers/frames
2. Enter your local URL (use ngrok for local testing)
3. Verify all metadata is correct

## Resources

- [Farcaster Frames Documentation](https://docs.farcaster.xyz/developers/frames/v2)
- [Frame SDK Reference](https://github.com/farcasterxyz/frame-sdk)
- [Warpcast Developer Portal](https://warpcast.com/~/developers)
