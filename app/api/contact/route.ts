import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const name = body.name?.trim() ?? "", email = body.email?.trim() ?? "", message = body.message?.trim() ?? "";
  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Please check the form fields." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ error: "The contact form isn't configured yet. Please use the email or LinkedIn links instead." }, { status: 503 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [to], reply_to: email, subject: `Portfolio message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Message could not be sent. Please try again later." }, { status: 502 });
  }
}
