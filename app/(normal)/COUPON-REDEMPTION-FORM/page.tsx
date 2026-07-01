"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
        createForm?: (form: any) => void;
    }
}

export default function Form226287() {
    useEffect(() => {
        const config = {
            formId: 226287,
            host: "form.morz.in",
            formHeight: 100,
            el: "form_226287_1",
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
        <div className=" bg-primary w-full py-12">
            <div id="form_226287_1" />

            <Script
                src="https://form.morz.in/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </ div>
    );
}