"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
        createForm?: (form: any) => void;
    }
}

export default function Form226317() {
    useEffect(() => {
        const config = {
            formId: 226317,
            host: "form.morz.in",
            formHeight: 100,
            el: "form_226317_1",
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
            <div id="form_226317_1" />

            <Script
                src="https://form.morz.in/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </ div>
    );
}