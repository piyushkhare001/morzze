import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import { Suspense } from "react";
import ScrollToTop from "@/components/commom/ScrollToTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Morzze - Kitchen & Bathroom Accessories",
  description: "Morzze - Premium Kitchen & Bathroom Accessories",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRVRHWKX');
          `}
        </Script>

        {/* Zoho PageSense */}
        <Script id="zoho-pagesense" strategy="beforeInteractive">
          {`
            (function(w,s){
              var e=document.createElement("script");
              e.type="text/javascript";
              e.async=true;
              e.src="https://cdn-in.pagesense.io/js/morzeein/e9d4db5d152049c294aa023a247e5c4f.js";
              var x=document.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(e,x);
            })(window,"script");
          `}
        </Script>
      </head>

      <body className="min-h-screen font-[var(--font-montserrat)]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRVRHWKX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <CartProvider>
          <WishlistProvider>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>

            {children}

            <Toaster theme="dark" position="top-right" richColors />
          </WishlistProvider>
        </CartProvider>


        <Script id="zoho-salesiq-config" strategy="afterInteractive">
          {`
    window.$zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
      ready: function(){}
    };
  `}
        </Script>

        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siqc64af953fda77f44847639357a51eb0b5135fdcd79266059e9fc918d5a991333"
          strategy="afterInteractive"
          defer
        />
      </body>
    </html>
  );
}