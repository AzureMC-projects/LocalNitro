/*
 * LocalNitro — local-only Vencord cosmetics.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./styles.css";

import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

let profilePreview: HTMLDivElement | undefined;

function toggleProfilePreview() {
    if (profilePreview) {
        profilePreview.remove();
        profilePreview = undefined;
        return;
    }

    const overlay = document.createElement("div");
    overlay.className = "localnitro-preview-backdrop";
    overlay.setAttribute("role", "presentation");

    const dialog = document.createElement("section");
    dialog.className = "localnitro-preview-card";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-labelledby", "localnitro-preview-title");

    const banner = document.createElement("div");
    banner.className = "localnitro-preview-banner";

    const avatar = document.createElement("div");
    avatar.className = "localnitro-preview-avatar";
    avatar.textContent = "LN";
    avatar.setAttribute("aria-label", "Sample avatar");

    const heading = document.createElement("div");
    heading.className = "localnitro-preview-heading";

    const name = document.createElement("h2");
    name.id = "localnitro-preview-title";
    name.textContent = "LocalNitro Preview";

    const username = document.createElement("p");
    username.textContent = "sample_user · example profile";

    const label = document.createElement("span");
    label.className = "localnitro-preview-label";
    label.textContent = "LOCAL MOCKUP";

    const description = document.createElement("p");
    description.className = "localnitro-preview-description";
    description.textContent = "A visual concept only. This does not edit your Discord profile or change what other people see.";

    const close = document.createElement("button");
    close.className = "localnitro-preview-close";
    close.type = "button";
    close.textContent = "Close preview";
    close.addEventListener("click", () => {
        overlay.remove();
        profilePreview = undefined;
    });

    heading.append(name, username, label);
    dialog.append(banner, avatar, heading, description, close);
    overlay.append(dialog);
    overlay.addEventListener("click", event => {
        if (event.target === overlay) {
            overlay.remove();
            profilePreview = undefined;
        }
    });

    profilePreview = overlay;
    document.body.append(overlay);
    close.focus();
}

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

    toolboxActions: {
        "Toggle local profile preview": toggleProfilePreview
    },

    start: syncAppearance,

    stop() {
        const root = document.documentElement;
        root.classList.remove("localnitro-theme", "localnitro-soft-corners", "localnitro-notice");
        delete root.dataset.localnitroPalette;
        profilePreview?.remove();
        profilePreview = undefined;
    }
});
