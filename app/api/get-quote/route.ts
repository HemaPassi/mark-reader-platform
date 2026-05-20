// app/api/get-quote/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Quote Request from ${body.name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${body.name}</p>

        <p><strong>Organization:</strong> ${body.organization}</p>

        <p><strong>Email:</strong> ${body.email}</p>

        <p><strong>Phone:</strong> ${body.phone}</p>

        <p><strong>Industry:</strong> ${body.industry}</p>

        <p><strong>Services:</strong> ${body.services.join(", ")}</p>

        <p><strong>Requirements:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit quote request",
      },
      { status: 500 }
    );
  }
}