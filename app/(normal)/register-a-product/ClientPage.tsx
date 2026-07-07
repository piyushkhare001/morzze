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

export default function Form233869() {
  useEffect(() => {
    const config = {
      formId: 233869,
      host: "form.morz.in",
      formHeight: 100,
      el: "form_233869_1",
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
    <div className=" w-full h-full bg-primary">
      <div className=" w-full h-full pb-12 gap-12 container mx-auto bg-primary">
        <Image
          src={"https://d2icu6klh68l1z.cloudfront.net/product-registration.png"}
          alt="product-registration"
          className=" w-full h-full"
          width={800}
          height={800}
        />
        <div className="h-12"></div>
        <div id="form_233869_1" />

        <Script
          src="https://form.morz.in/js/iform.js?v=0.0.3"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
