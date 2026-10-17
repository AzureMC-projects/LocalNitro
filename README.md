# LocalNitro

A local-only Vencord user plugin for Discord on Windows.

LocalNitro is intended for cosmetic previews and client-side quality-of-life features. It does **not** grant an actual Nitro subscription, change account entitlements, bypass server-side checks, increase upload limits, or make local changes visible to other users.

## Current starter features

- Vencord plugin settings for enabling a local cosmetic theme and a local-only notice.
- A small optional notice that explicitly identifies the feature as local cosmetics.
- Start/stop cleanup so the plugin removes its own CSS classes when disabled.

## Install for development

1. Clone the official Vencord repository and follow its current build instructions: https://github.com/Vendicated/Vencord
2. Copy this repository's `index.ts` and `styles.css` into `src/userplugins/localnitro/` in your Vencord checkout.
3. Ensure the plugin directory contains both files.
4. Build and inject Vencord using the official instructions.
5. Enable **LocalNitro** in Vencord settings and restart Discord if prompted.

Vencord APIs and Discord's internal CSS class names can change. Treat this as a starter scaffold, test against your current Vencord checkout, and prefer stable semantic hooks when implementing future UI patches.

## Roadmap

- Local profile/banner/avatar decoration previews.
- Theme and gradient controls.
- Improved local media previews and sticker/GIF browsing.
- Feature-by-feature compatibility checks and graceful fallbacks when a server entitlement is required.

## Disclaimer

Unofficial project; not affiliated with Discord or Vencord. Client modifications can carry account and stability risks. Never enter your Discord token into third-party tools or scripts.
