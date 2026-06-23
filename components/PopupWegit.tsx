"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        Poper: any[];
    }
}

export default function PoperWidget() {
    useEffect(() => {
        window.Poper = window.Poper || [];

        window.Poper.push({
            accountID: "af3fd5d37e3deeb67d8b7f2beed1b795",
        });
    }, []);

    return (
        <Script
            id="poper-script"
            src="https://app.poper.ai/share/poper.js"
            data-account-id="af3fd5d37e3deeb67d8b7f2beed1b795"
            strategy="afterInteractive"
        />
    );
}