import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
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
 
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRVRHWKX');
          `}
        </Script>
       
      </head>
      <body className="min-h-screen  font-[var(--font-montserrat)]">
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
            {children}
            <Toaster theme="dark" position="top-right" richColors />

          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
