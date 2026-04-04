import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      services,
      pages,
      budget,
      timeline,
      addons,
      langs,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const text = `New Project Brief — amenzo.co/start-project

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Services: ${Array.isArray(services) ? services.join(", ") : services || "Not specified"}
Pages: ${pages || "Not specified"}
Budget: ${budget || "Not specified"}
Timeline: ${timeline || "Not specified"}
Languages: ${langs || "Not specified"}
Add-ons: ${Array.isArray(addons) ? addons.join(", ") : addons || "None"}

Message / Project Details:
${message || "No additional details provided"}`;

    const { error } = await resend.emails.send({
      from: "Amenzo Website <noreply@amenzo.co>",
      to: "info@amenzo.co",
      replyTo: email,
      subject: `New Project: ${name}${company ? ` (${company})` : ""} — ${budget || "Budget TBD"}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Start project form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
