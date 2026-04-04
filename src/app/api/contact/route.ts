import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, company, enquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const text = `New Contact Form Submission — amenzo.co/contact

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Enquiry Type: ${enquiryType || "General"}

Message:
${message}`;

    const { error } = await resend.emails.send({
      from: "Amenzo Website <noreply@amenzo.co>",
      to: "info@amenzo.co",
      replyTo: email,
      subject: `Contact: ${name}${company ? ` (${company})` : ""} — ${enquiryType || "General"}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
