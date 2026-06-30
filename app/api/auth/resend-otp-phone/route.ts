import { NextResponse } from "next/server";
import { resendOtpSms } from "@/helper/msg91";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone } = body;

    if (!phone) {
      return NextResponse.json(
        { message: "Phone number is required." },
        { status: 400 }
      );
    }

    const result = await resendOtpSms(phone);

    if (result.success) {
      return NextResponse.json(
        { message: "OTP resent successfully.", data: result.data },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: result.message || "Failed to resend OTP." },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("resend-otp-phone route error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
