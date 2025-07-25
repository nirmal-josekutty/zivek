import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Invalid email" }, { status: 400 });
    }

    // Your secret key (kept server-side only)
    const SECRET_KEY = "12hsdjvdfh65dggsdh";
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzC0V4Bq3geb1QNG0sFVH9qrUcC2MHEff6pvVBfM-JNfan88XdVxvQ5nN1ww0wKMb1t2A/exec";

    const response = await fetch(`${SCRIPT_URL}?key=${SECRET_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ email }),
    });

    const text = await response.text();
    if (text === "Success") {
      return NextResponse.json({ success: true, message: "Signup successful!" });
    } else {
      return NextResponse.json({ success: false, message: text }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
