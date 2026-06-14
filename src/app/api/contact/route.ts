import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !company || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Replace with your preferred email service (SendGrid, Resend, Nodemailer via Cloud Run)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'no-reply@itworldltd.com',
    //   to: 'pranay@itworldltd.com',
    //   subject: `New enquiry from ${name} at ${company}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p>
    //          <p>Phone: ${phone}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    // });

    console.log("Contact form submission:", { name, email, company, phone, service, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
