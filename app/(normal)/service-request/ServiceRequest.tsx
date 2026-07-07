import SupportServiceRequest from "@/components/support/ServiceRequest";
import { ServiceRequestFrom } from "./ServiceRequestFrom";

const ServiceRequest = () => {
  return (
    <section className="h-full w-full bg-black py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white font-montserrat uppercase tracking-tight mb-12">
        Service Request
      </h1>
      {/* <SupportServiceRequest /> */}
      <ServiceRequestFrom />
    </section>
  );
};

export default ServiceRequest;
