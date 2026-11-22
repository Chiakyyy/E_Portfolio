// Server route handling contact form delivery through resend.
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Handler processing post requests for contact messages.
export async function POST(req: Request) {
  try {
    // Parsing request payload for sender details.
    const body = await req.json();
    const { name, email, message } = body || {};

    // Validating required input fields before sending.
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Missing or invalid name field." },
        { status: 400 }
      );
    }

    // Validating email address formatting.
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Missing or invalid email field." },
        { status: 400 }
      );
    }

    // Validating message body content.
    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Missing or invalid message field." },
        { status: 400 }
      );
    }

    // Reading api credentials from environment configuration.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email delivery service is not configured." },
        { status: 500 }
      );
    }

    // Target recipient address configured in environment variables.
    const toEmail = process.env.CONTACT_EMAIL || "agouriane.amr@gmail.com";
    const resend = new Resend(apiKey);

    // Delivering the formatted contact email message.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email.trim(),
      subject: `New Portfolio Message from ${name.trim()}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
          <h2 style="margin-top: 0; color: #FA2A55; font-size: 20px;">New Portfolio Contact Message</h2>
          <p style="margin-bottom: 20px; color: #4b5563; font-size: 14px;">Someone submitted a new message through your developer portfolio.</p>
          <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Name:</strong> ${name.trim()}</p>
            <p style="margin: 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email.trim()}" style="color: #0A66C2;">${email.trim()}</a></p>
          </div>
          <div style="margin-top: 16px;">
            <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #374151;">Message:</p>
            <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1f2937; background: #ffffff; border: 1px solid #e5e7eb; padding: 16px; border-radius: 8px;">
              ${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </div>
          </div>
        </div>
      `,
    });

    // Checking if resend encountered a delivery failure.
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Returning success response with delivery metadata.
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    // Catching unexpected runtime exceptions.
    return NextResponse.json(
      { error: err?.message || "Failed to process message." },
      { status: 500 }
    );
  }
}
