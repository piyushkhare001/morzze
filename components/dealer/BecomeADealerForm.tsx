"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
        createForm?: (form: any) => void;
    }
}

export function BecomeADealerFrom() {
    useEffect(() => {
        const config = {
            formId: 233938,
            host: "formdesigner.pro",
            formHeight: 100,
            el: "form_233938_1",
            center: 1,
            scroll: 0,
        };

        if (typeof window.createForm === "function") {
            window.createForm(config);
        } else {
            window.fdforms = window.fdforms || [];
            window.fdforms.push(config);
        }
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