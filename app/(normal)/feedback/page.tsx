"use client";

import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";

declare global {
    interface Window {
        fdforms: any[];
        createForm?: (form: any) => void;
    }
}

export default function Form234089() {
    useEffect(() => {
        const config = {
            formId: 234089,
            host: "form.morz.in",
            formHeight: 100,
            el: "form_234089_1",
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
        <div className=" bg-primary gap-12 pb-12">
            <Image
                src={"https://ik.imagekit.io/zwos7q4gyo/feedback-bg.png"}
                height={800}
                width={800}
                className=' w-full h-full'
                alt='subs-image'
            />
            <div className="h-12"></div>            <div id="form_234089_1" />

            <Script
                src="https://form.morz.in/js/iform.js?v=0.0.3"
                strategy="afterInteractive"
            />
        </div>
    );
}