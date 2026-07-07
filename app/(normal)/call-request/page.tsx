"use client";
// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { toast } from "sonner";
import { RequestCallbackFrom } from "./RequestCallBackForm";

// type CallbackFormData = {
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
//   message: string;
// };

// const initialFormData: CallbackFormData = {
//   firstName: "",
//   lastName: "",
//   phone: "",
//   email: "",
//   message: "",
// };

const CallbackForm = () => {
  // const [formData, setFormData] = useState<CallbackFormData>(initialFormData);
  // const [consent, setConsent] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!formData.firstName.trim()) return toast.error("First name is required");
  //   if (!formData.lastName.trim()) return toast.error("Last name is required");
  //   if (!formData.phone.trim()) return toast.error("Phone number is required");
  //   if (!formData.email.trim()) return toast.error("Email is required");
  //   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     return toast.error("Please enter a valid email address");
  //   }
  //   if (!consent) return toast.error("Please accept the privacy consent");

  //   const toastId = toast.loading("Requesting callback...");

  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
  //         email: formData.email.trim(),
  //         phone: formData.phone.trim(),
  //         category: "callback",
  //         subject: "Request a Callback",
  //         message: formData.message.trim() || "Request a callback.",
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok || !data.success) {
  //       throw new Error(data.message || "Could not submit callback request");
  //     }

  //     toast.success("Callback request submitted successfully", { id: toastId });
  //     setFormData(initialFormData);
  //     setConsent(false);
  //   } catch (error) {
  //     toast.error(
  //       error instanceof Error ? error.message : "Something went wrong",
  //       { id: toastId }
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="w-full h-full bg-black py-10">
      <div className="max-w-4xl mx-auto bg-[#0A0A0A] border border-white/5 p-8 md:p-12">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">Connect with Us</h1>
          <h2 className="text-white/80 text-sm mt-2">Reach out for personalised support.</h2>
        </div>

        <RequestCallbackFrom />
      </div>
    </section>
  );
};

export default CallbackForm;
