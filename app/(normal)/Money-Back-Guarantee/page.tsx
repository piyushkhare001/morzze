"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
    interface Window {
        fdforms: any[];
        createForm?: (form: any) => void;
    }
}

export default function Form226198() {
    useEffect(() => {
        const config = {
            formId: 226198,
            host: "form.morz.in",
            formHeight: 100,
            el: "form_226198_1",
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
        < div className=" bg-primary py-12">

            <div className=" flex items-center pb-12 flex-col gap-4">
                <p className=" text-white text-3xl font-semibold">Welcome to Morzze</p>
                <p className=" text-white">India's Leading Manufacturer of Bathroom & Kitchen Solutions</p>
            </div>

            <div id="form_226198_1" />

            <Script
                src="https://form.morz.in/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </div>
    );
}