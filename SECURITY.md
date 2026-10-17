# Security Policy

## Scope

LocalNitro is a small Vencord user plugin. The current implementation is intended to apply client-side cosmetic styling only.

## Reporting a vulnerability

Please do not publish tokens, private messages, account identifiers, or exploitable details in a public issue. Open a private security advisory through GitHub's **Security** tab when available. If private reporting is unavailable, open an issue asking for a secure contact method without including sensitive details.

## Security expectations

- LocalNitro should never request or transmit a Discord token.
- Do not add undisclosed telemetry or network calls.
- Cosmetic previews must not be represented as server-side account changes.
- Never bypass Discord permissions, server-side entitlement checks, or upload restrictions.
