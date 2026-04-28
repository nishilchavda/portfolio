// api/send-email.js
const nodemailer = require("nodemailer");

// Create the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, msg } = req.body;

    // 2. Input Validation
    if (!name || !email || !subject || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please Provide all Fields",
      });
    }

    // 3. Send Email
    await transporter.sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `Portfolio Contact: Message from ${name}`,
      replyTo: email,
      html: `<div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
        <div style="background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background-color:#111827;padding:24px 28px;">
            <h2 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Portfolio Contact</h2>
            <p style="margin:8px 0 0;color:#d1d5db;font-size:14px;">Someone submitted your contact form.</p>
          </div>
          <div style="padding:28px;">
            <p style="margin:0 0 18px;color:#374151;font-size:15px;">You received a new message from your portfolio website.</p>
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;">Name</p>
              <p style="margin:0;color:#111827;font-size:16px;">${name}</p>
            </div>
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;">Email</p>
              <p style="margin:0;color:#111827;font-size:16px;">${email}</p>
            </div>
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;">Subject</p>
              <p style="margin:0;color:#111827;font-size:16px;">${subject}</p>
            </div>
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 6px;color:#6b7280;font-size:13px;font-weight:600;text-transform:uppercase;">Message</p>
              <div style="background-color:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#111827;font-size:15px;line-height:1.6;">${msg}</div>
            </div>
          </div>
          <div style="padding:18px 28px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#6b7280;font-size:13px;">Reply directly to this ${email} to respond to ${name}.</p>
          </div>
        </div>
      </div>
    </div>`,
    });

    return res.status(200).json({
      success: true,
      message: "Your Message Sent",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Send Email Api Error",
      error: error.message,
    });
  }
}