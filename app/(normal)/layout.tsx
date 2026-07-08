import Header from "@/components/commom/header";
import Footer from "@/components/commom/footer";
import FloatingWhatsappButton from "@/components/Whatsapp_Button/FloatingWhatsappButton";
import Script from "next/script";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <PoperWidget /> */}
      <Header />
      {children}
      <Script
        type="text/javascript"
        src="https://crm.zoho.in/crm/javascript/zcga.js"
      />
      <Footer />
      <FloatingWhatsappButton />
    </>
  );
}
