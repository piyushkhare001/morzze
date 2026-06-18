import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { WishlistProvider } from "@/context/WishlistContext";
import { CartProvider } from "@/context/CartContext";
import FloatingWhatsappButton from "@/components/Whatsapp_Button/FloatingWhatsappButton";

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
      <body className="min-h-screen  font-[var(--font-montserrat)]">
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
