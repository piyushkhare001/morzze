"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
    }
}

export function BecomeADealerFrom() {
    useEffect(() => {
        window.fdforms = window.fdforms || [];

        window.fdforms.push({
            formId: 233938,
            host: "formdesigner.pro",
            formHeight: 100,
            el: "form_233938_1",
            center: 1,
            scroll: 0,
        });
    }, []);

    return (
        <>
            <div id="form_233938_1" />

            <Script
                src="https://formdesigner.pro/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </>
    );
}