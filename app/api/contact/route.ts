import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Save to database
    await supabase.from("contacts").insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
      },
    ]);

    // Send email
    await resend.emails.send({
      from: "OMR India Website <noreply@omr.in>",
      to: "info@omr.in",
      replyTo: body.email,
      subject: `New Lead - ${body.name}`,
      html: `
    <h2>New Contact Lead</h2>

    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>Service:</strong> ${body.service}</p>
    <p><strong>Message:</strong> ${body.message}</p>
  `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
