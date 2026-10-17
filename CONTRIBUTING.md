# Contributing to LocalNitro

Thanks for helping improve LocalNitro. The project prioritises a clean user experience, honest feature claims, accessibility, and compatibility with upstream Vencord.

## Before opening an issue

- Check existing issues for duplicates.
- Include Discord/Vencord versions, operating system, steps to reproduce, and relevant console errors.
- Redact account identifiers, private messages, server names, tokens, and other personal data from logs or screenshots.

## Development setup

1. Install and build Vencord by following its [official source guide](https://docs.vencord.dev/installing/).
2. Place this plugin in `src/userplugins/localNitro/`.
3. Use the current Vencord build/watch workflow to compile and test.
4. Test enabling, disabling, and changing every setting.
5. Confirm `stop()` removes all plugin-owned classes and attributes.

This repository is a plugin source repository, not a standalone Discord client. A successful GitHub commit does not imply a successful Vencord build.

## Pull request checklist

- [ ] The change has a focused scope and clear description.
- [ ] No token collection, telemetry, or undisclosed network requests are added.
- [ ] No server-side entitlement checks, upload limits, or permissions are bypassed.
- [ ] User-facing claims match what is actually implemented.
- [ ] New settings have sensible defaults and descriptions.
- [ ] Cleanup is implemented for DOM classes, listeners, and other side effects.
- [ ] The plugin was tested against a current Vencord checkout, or the PR clearly states what could not be tested.
- [ ] README feature status and release notes are updated when needed.

## Design principles

1. **Local-first:** cosmetic previews should remain local and must not imply server-side changes.
2. **Reversible:** disabling the plugin should restore the client's prior state as closely as possible.
3. **No fragile assumptions:** Discord's internal CSS classes are unstable; use the least brittle supported approach.
4. **Accessible:** respect reduced-motion settings, preserve readable contrast, and avoid obstructive overlays.
5. **Honest:** do not label a planned or untested feature as complete.
