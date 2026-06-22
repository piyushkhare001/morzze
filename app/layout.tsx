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
      <body className="min-h-screen  font-[var(--font-montserrat)]">
        <CartProvider>
          <WishlistProvider>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
            {children}
            <Toaster theme="dark" position="top-right" richColors />

          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
