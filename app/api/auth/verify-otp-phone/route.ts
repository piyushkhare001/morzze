import { NextResponse } from "next/server";
import { verifyOtpSms } from "@/helper/msg91";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, code } = body;

    if (!phone || !code) {
      return NextResponse.json(
        { message: "Phone number and OTP code are required." },
        { status: 400 }
      );
    }

    const result = await verifyOtpSms(phone, code);

    if (result.success) {
      // Here you would typically mark the user as verified in the database
      // Or sign them in, issue a session cookie/token, etc.
      return NextResponse.json(
        { message: "OTP verified successfully.", data: result.data },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: result.message || "Invalid OTP." },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("verify-otp-phone route error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
