/*
 * LocalNitro — local-only Vencord cosmetics.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

function syncAppearance() {
    const root = document.documentElement;
    const { enableLocalTheme, accentPreset, softCorners, showLocalNotice } = settings.store;

    root.classList.toggle("localnitro-theme", enableLocalTheme);
    root.classList.toggle("localnitro-soft-corners", enableLocalTheme && softCorners);
    root.classList.toggle("localnitro-notice", showLocalNotice);
    root.dataset.localnitroPalette = accentPreset;
}

const settings = definePluginSettings({
    enableLocalTheme: {
        displayName: "Enable local theme",
        description: "Apply a cosmetic accent theme to this Discord client only.",
        type: OptionType.BOOLEAN,
        default: true,
        onChange: syncAppearance
    },
    accentPreset: {
        displayName: "Accent palette",
        description: "Choose the accent colour used by the local theme.",
        type: OptionType.SELECT,
        options: [
            { label: "Violet", value: "violet", default: true },
            { label: "Ocean", value: "ocean" },
            { label: "Rose", value: "rose" },
            { label: "Mint", value: "mint" }
        ],
        onChange: syncAppearance
    },
    softCorners: {
        displayName: "Softer corners",
        description: "Gently round selected client surfaces where Discord's CSS allows it.",
        type: OptionType.BOOLEAN,
        default: true,
        onChange: syncAppearance
    },
    showLocalNotice: {
        displayName: "Show local-only notice",
        description: "Display a small notice reminding you these changes are client-side only.",
        type: OptionType.BOOLEAN,
        default: true,
        onChange: syncAppearance
    }
});

export default definePlugin({
    name: "LocalNitro",
    description: "Polished, local-only Discord cosmetics. Does not grant Nitro or bypass server-side entitlement checks.",
    authors: [{ name: "AzureMC-projects", id: 0n }],
    tags: ["Appearance", "Customisation", "Utility"],
    settings,

    start: syncAppearance,

    stop() {
        const root = document.documentElement;
        root.classList.remove("localnitro-theme", "localnitro-soft-corners", "localnitro-notice");
        delete root.dataset.localnitroPalette;
    }
});
