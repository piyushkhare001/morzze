export async function sendOtpSms(phone: string) {
  const authKey = process.env.MSG91_AUTH_KEY;
  const templateId = process.env.MSG91_TEMPLATE_ID;

  if (!authKey || !templateId) {
    console.warn("MSG91 credentials not configured. OTP not sent.");
    return { success: false, message: "MSG91 not configured" };
  }

  // Ensure phone has country code. Assuming Indian numbers (91) if 10 digits are passed.
  const mobile = phone.length === 10 ? `91${phone}` : phone;

  try {
    const response = await fetch(
      `https://control.msg91.com/api/v5/otp?template_id=${templateId}&mobile=${mobile}`,
      {
        method: "POST",
        headers: {
          authkey: authKey,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (data.type === "success") {
      return { success: true, data };
    } else {
      console.error("MSG91 Send OTP Error:", data);
      return { success: false, message: data.message || "Failed to send OTP" };
    }
  } catch (error: any) {
    console.error("MSG91 Send OTP Exception:", error);
    return { success: false, message: error.message };
  }
}

export async function verifyOtpSms(phone: string, otp: string) {
  const authKey = process.env.MSG91_AUTH_KEY;

  if (!authKey) {
    return { success: false, message: "MSG91 not configured" };
  }

  const mobile = phone.length === 10 ? `91${phone}` : phone;

  try {
    const response = await fetch(
      `https://control.msg91.com/api/v5/otp/verify?mobile=${mobile}&otp=${otp}`,
      {
        method: "GET",
        headers: {
          authkey: authKey,
        },
      }
    );

    const data = await response.json();

    if (data.type === "success") {
      return { success: true, data };
    } else {
      console.error("MSG91 Verify OTP Error:", data);
      return { success: false, message: data.message || "Invalid OTP" };
    }
  } catch (error: any) {
    console.error("MSG91 Verify OTP Exception:", error);
    return { success: false, message: error.message };
  }
}

export async function resendOtpSms(phone: string) {
  const authKey = process.env.MSG91_AUTH_KEY;

  if (!authKey) {
    return { success: false, message: "MSG91 not configured" };
  }

  const mobile = phone.length === 10 ? `91${phone}` : phone;

  try {
    const response = await fetch(
      `https://control.msg91.com/api/v5/otp/retry?mobile=${mobile}&retrytype=text`,
      {
        method: "GET",
        headers: {
          authkey: authKey,
        },
      }
    );

    const data = await response.json();

    if (data.type === "success") {
      return { success: true, data };
    } else {
      console.error("MSG91 Resend OTP Error:", data);
      return { success: false, message: data.message || "Failed to resend OTP" };
    }
  } catch (error: any) {
    console.error("MSG91 Resend OTP Exception:", error);
    return { success: false, message: error.message };
  }
}
