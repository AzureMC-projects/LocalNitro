/*
 * LocalNitro — a local-only Vencord user plugin.
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const settings = definePluginSettings({
    enableLocalTheme: {
        description: "Apply the LocalNitro cosmetic theme to your Discord client only",
        type: OptionType.BOOLEAN,
        default: false,
        restartNeeded: true
    },
    showLocalNotice: {
        description: "Show a small local-only notice in the client theme",
        type: OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    }
});

export default definePlugin({
    name: "LocalNitro",
    description: "Local-only cosmetic previews and quality-of-life enhancements. Does not grant Discord Nitro or bypass server-side entitlement checks.",
    authors: [Devs.Vencord],
    tags: ["Appearance", "Utility"],
    settings,

    start() {
        if (settings.store.enableLocalTheme)
            document.documentElement.classList.add("localnitro-theme");

        if (settings.store.showLocalNotice)
            document.documentElement.classList.add("localnitro-notice");
    },

    stop() {
        document.documentElement.classList.remove("localnitro-theme", "localnitro-notice");
    }
});
