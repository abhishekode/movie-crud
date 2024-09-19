import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    ignoreTLS: true,
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: myEmail,
      replyTo: email,
      subject: `🎉 New Enrollment Submitted By ${name}`,
      html: `
        <div style="background-color: #EEF5FF; padding: 20px; border-radius: 10px; width: 75%;">
            <h2 style="color: #111;">📝 New Enrollment Details</h2>
            <hr style="border: 0; border-top: 1px solid #111;">
            <p style="font-size: 16px; color: #111;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;color: #111;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;color: #111;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 14px; color: #666;">Thank you for submitting your enrollment details. We will get back to you soon.</p>
        </div>
    `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
