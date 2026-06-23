"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
    }
}

export function ServiceRequestFrom() {
    useEffect(() => {
        window.fdforms = window.fdforms || [];

        window.fdforms.push({
            formId: 225979,
            host: "form.morz.in",
            formHeight: 100,
            el: "form_225979_1",
            center: 1,
            scroll: 0,
        });
    }, []);

    return (
        <>
            <div id="form_225979_1" />

            <Script
                src="https://form.morz.in/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </>
    );
}