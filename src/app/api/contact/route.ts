// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { fullName, phone, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_USER,
            pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "yournextstepbyyanir@gmail.com",
            subject: "טופס צור קשר מאתר Next Step",
            text: `
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error sending mail", error);
        return NextResponse.json({ success: false, error: "Email failed" }, { status: 500 });
    }
}
